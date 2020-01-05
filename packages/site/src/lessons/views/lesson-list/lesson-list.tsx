import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardActions, CardContent, CardHeader, createStyles, Link as MaterialLink, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Presentation } from "../../../../../presenter-core/src/services/types";

const useStyles = makeStyles(createStyles({
    tablePaper: {
        overflowX: "auto",
        fontSize: 12
    },
    tableIcon: {
        marginRight: 8
    },
    lessonCard: {
        margin: "16px 0"
    }
}))

export function LessonList(props: Props) {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    return isSmall
        ? <LessonCards {...props} />
        : <LessonTable {...props} />
}

function LessonCards({ lessons, baseUrl }: Props) {
    const classes = useStyles();

    return <>{
        lessons.map((lesson) => (
            <Card className={ classes.lessonCard } key={ lesson.title }>
                <CardHeader title={ lesson.title } />
                <CardContent>
                    { lesson.description }
                    { lesson.lab && (
                        <MaterialLink component={ Link } to={`${baseUrl}/labs/${lesson.lab.slug}`}>Lab: { lesson.lab.title }</MaterialLink>
                    )}
                </CardContent>
                <CardActions>
                    <MaterialLink component={ Link } to={`${baseUrl}/lessons/${lesson.slug}/examples`}>Examples</MaterialLink>
                    <MaterialLink component={ Link } to={`${baseUrl}/lessons/${lesson.slug}/slides/0`}>Slides</MaterialLink>
                    { lesson.recording
                        ? <MaterialLink href={lesson.recording.link} target="_blank" rel="noopener">
                            Recording
                        </MaterialLink>
                        : null 
                    }
                </CardActions>
            </Card>
    )) }</>;
}

function LessonTable({ lessons, baseUrl }: Props) {
    const classes = useStyles();
    return (
        <Paper className={ classes.tablePaper }>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Class Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Slides</TableCell>
                        <TableCell>Examples</TableCell>
                        <TableCell>Recording</TableCell>
                        <TableCell>Lab</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { lessons.map((lesson) => (
                        <TableRow key={ lesson.title }>
                            <TableCell>{ lesson.title }</TableCell>
                            <TableCell>{ lesson.description }</TableCell>
                            <TableCell>
                                <MaterialLink component={ Link } to={`${baseUrl}/lessons/${lesson.slug}/slides/0`}>
                                    <FontAwesomeIcon icon={ faDesktop } className={ classes.tableIcon } />
                                    ({ lesson.slides.length })
                                </MaterialLink>
                            </TableCell>
                            <TableCell>
                                { lesson.examples.length > 0 && (
                                    <MaterialLink component={ Link } to={`${baseUrl}/lessons/${lesson.slug}/examples`}>
                                        <FontAwesomeIcon icon={ faCode } className={ classes.tableIcon } />
                                        ({ lesson.examples.length })
                                    </MaterialLink>
                                )}
                            </TableCell>
                            <TableCell>
                                { lesson.recording
                                    ? <MaterialLink href={ lesson.recording.link }>
                                        <FontAwesomeIcon icon={ faVideo } className={ classes.tableIcon } />
                                    </MaterialLink>
                                    : null
                                }
                            </TableCell>
                            <TableCell>
                                { lesson.lab && (
                                    <MaterialLink component={ Link } to={ `${baseUrl}/labs/${lesson.lab.slug}`}>
                                        { lesson.lab.title }
                                    </MaterialLink>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

interface Props {
    lessons: Presentation[];
    baseUrl: string;
}