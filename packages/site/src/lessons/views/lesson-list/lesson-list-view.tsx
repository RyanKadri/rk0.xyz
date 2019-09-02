import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, createStyles, List, ListItem, ListItemText, ListSubheader, makeStyles, Menu, MenuItem, Paper, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";
import { fetchLastCourse, saveCourseSelection } from "../../../root/user-settings-service";
import { LessonList } from "./lesson-list";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        flexShrink: 1,
        margin: 16
    },
    container: {
        minHeight: "calc(100vh - 64px)",
    },
    listContainer: {
        padding: 16,
        flexGrow: 1,
        maxWidth: "100vw"
    },
    topBar: {
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
        "& button": {
            textTransform: "none"
        }
    },
    topBarIcon: {
        marginLeft: theme.spacing(1)
    }
}));

export function LessonListView({ courses, currCourse, baseUrl }: Props) {
    const classes = useStyles();
    const lastCourse = fetchLastCourse();
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    return (
        <div className={ classes.container }>
            { currCourse && (
                <div className={ classes.topBar }>
                    <Button variant="text" onClick={ (e) => setAnchor(e.currentTarget) } color="inherit">
                        <Typography>
                            { currCourse.title }
                            <FontAwesomeIcon icon={ faCaretDown } className={ classes.topBarIcon } />
                        </Typography>
                    </Button>
                    <Menu anchorEl={anchor} 
                          open={ anchor !== null } 
                          onClose={() => setAnchor(null)}>
                            { courses.map((course) => (
                                <MenuItem component={Link} key={course.title}
                                        to={`${baseUrl}/${course.slug}`}
                                        onClick={ () => saveCourseSelection(course.slug) }>
                                    { course.title }
                                </MenuItem>
                            ))}
                    </Menu>
                </div>
            )}
            <div className={ classes.listContainer }>
                { currCourse === undefined 
                    ? (
                        <>
                            { lastCourse !== null && <Redirect to={`${baseUrl}/${lastCourse}`} />}
                            <Typography>Please select a course</Typography>
                            <Paper>
                                <List subheader={<ListSubheader>Courses</ListSubheader>}>
                                    { courses.map((course) => (
                                        <ListItem button 
                                                  key={course.slug} 
                                                  component={ Link } 
                                                  to={`${baseUrl}/${course.slug}`} 
                                                  onClick={ () => saveCourseSelection(course.slug) }>
                                            <ListItemText primary={ course.title } />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </>
                    )
                    : <LessonList lessons={ currCourse.lessons } baseUrl={ `${baseUrl}/${currCourse.slug}/lessons` } />
                }
            </div>
        </div>
    )
}

interface Props {
    courses: CourseDefinition[];
    currCourse: CourseDefinition | undefined;
    baseUrl: string;
}