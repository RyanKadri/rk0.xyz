import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, Link as MaterialLink, List, ListItem, ListItemText, ListSubheader, Paper, Table, TableBody, TableCell, TableHead, TableRow, WithStyles, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CourseDefinition } from "../../../presenter-core/src/services/types";
import { useAppBar } from "../common/use-app-bar";

const styles = createStyles({
    card: {
        flexShrink: 1,
        margin: 16
    },
    container: {
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row"
    },
    sidebar: {
        width: 300,
        alignSelf: "stretch"
    },
    tablePaper: {
        margin: 16,
        flexGrow: 1
    },
    tableIcon: {
        marginRight: 8
    }
})

const _PresentationSelector = ({ classes, courses }: Props) => {
    useAppBar("Choose a class");
    const [ currentCourseInd, setCurrentCourseInd ] = useState<number>(0);
    const currentCourse = courses[currentCourseInd];

    return (
        <div className={ classes.container }>
            <Paper className={ classes.sidebar }>
                <List subheader={<ListSubheader>Courses</ListSubheader>}>
                    { courses.map((course, i) => (
                        <ListItem button onClick={ () => setCurrentCourseInd(i) } key={course.title}>
                            <ListItemText primary={ course.title } />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper className={ classes.tablePaper }>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Class Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Slides</TableCell>
                            <TableCell>Examples</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { currentCourse.lessons.map((lesson, i) => (
                            <TableRow key={ lesson.title }>
                                <TableCell>{ lesson.title }</TableCell>
                                <TableCell>{ lesson.description }</TableCell>
                                <TableCell>
                                    <MaterialLink component={ Link as any } { ...{ to: `courses/${currentCourseInd}/presentations/${i}/slides/0`}}>
                                        <FontAwesomeIcon icon={ faDesktop } className={ classes.tableIcon } />
                                        ({ lesson.slides.length })
                                    </MaterialLink>
                                </TableCell>
                                { lesson.examples.length > 0 && (
                                    <TableCell>
                                        <MaterialLink component={ Link as any } { ...{ to: `courses/${currentCourseInd}/presentations/${i}/examples`}}>
                                            <FontAwesomeIcon icon={ faCode } className={ classes.tableIcon } />
                                            ({ lesson.examples.length })
                                        </MaterialLink>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export const PresentationSelector = withStyles(styles)(_PresentationSelector)

interface Props extends WithStyles<typeof styles> {
    courses: CourseDefinition[]
}