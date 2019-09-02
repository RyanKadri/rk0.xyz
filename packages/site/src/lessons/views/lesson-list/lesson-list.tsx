import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
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
                <CardContent>{ lesson.description }</CardContent>
                <CardActions>
                    <MaterialLink component={ Link } to={`${baseUrl}/${lesson.slug}/examples`}>Examples</MaterialLink>
                    <MaterialLink component={ Link } to={`${baseUrl}/${lesson.slug}/slides/0`}>Slides</MaterialLink>
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    { lessons.map((lesson) => (
                        <TableRow key={ lesson.title }>
                            <TableCell>{ lesson.title }</TableCell>
                            <TableCell>{ lesson.description }</TableCell>
                            <TableCell>
                                <MaterialLink component={ Link } to={`${baseUrl}/${lesson.slug}/slides/0`}>
                                    <FontAwesomeIcon icon={ faDesktop } className={ classes.tableIcon } />
                                    ({ lesson.slides.length })
                                </MaterialLink>
                            </TableCell>
                            { lesson.examples.length > 0 && (
                                <TableCell>
                                    <MaterialLink component={ Link } to={`${baseUrl}/${lesson.slug}/examples`}>
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
    );
}

interface Props {
    lessons: Presentation[];
    baseUrl: string;
}