import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardActions, CardContent, CardHeader, createStyles, Link as MaterialLink, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery, useTheme } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";

const useStyles = makeStyles(createStyles({
    tablePaper: {
        overflowX: "auto",
        fontSize: 12,
        gridColumn: "1/4"
    },
    tableIcon: {
        marginRight: 8
    },
    lessonCard: {
        margin: "16px 0"
    },
    labLink: {
        display: "block"
    },
    tableViewParent: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px"
    },
    headerRow: {
        "& th, & td": {
            fontWeight: 700
        }
    }
}));

export function LessonList(props: Props) {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    return isSmall
        ? <LessonCardView {...props} />
        : <LessonTableView {...props} />
}

function LessonCardView({ course, baseUrl }: Props) {
    const classes = useStyles();

    return <>{
        course.lessons.map((lesson) => (
            <Card className={ classes.lessonCard } key={ lesson.title }>
                <CardHeader title={ lesson.title } />
                <CardContent>
                    { lesson.description }
                    { lesson.lab && (
                        <Link href={`${baseUrl}/labs/${lesson.lab.slug}`} passHref>
                            <MaterialLink className={ classes.labLink }>
                                Lab: { lesson.lab.title }
                            </MaterialLink>
                        </Link>
                    )}
                </CardContent>
                <CardActions>
                    <Link href={`${baseUrl}/lessons/${lesson.slug}/examples`} passHref>
                        <MaterialLink>Examples</MaterialLink>
                    </Link>
                    <Link href={`${baseUrl}/lessons/${lesson.slug}/slides/0`} passHref>
                        <MaterialLink>Slides</MaterialLink>
                    </Link>
                    { lesson.recording
                        ? <MaterialLink href={lesson.recording.link} target="_blank" rel="noopener">
                            Recording
                        </MaterialLink>
                        : null 
                    }
                </CardActions>
            </Card>
        )) }
        { (course.courseExtras || []).map(extra => (
            <LinkCard baseUrl={ baseUrl } title={ extra.title } relativeLink={ extra.route } key={ extra.route } />
        ))}
    </>;
}

function LessonTableView({ course, baseUrl }: Props) {
    const classes = useStyles();
    return (
        <div className={ classes.tableViewParent }>
            <Paper className={ classes.tablePaper }>
                <Table>
                    <TableHead>
                        <TableRow className={ classes.headerRow }>
                            <TableCell>Class Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Slides</TableCell>
                            <TableCell>Examples</TableCell>
                            <TableCell>Recording</TableCell>
                            <TableCell>Lab</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { course.lessons.map((lesson) => (
                            <TableRow key={ lesson.title }>
                                <TableCell>{ lesson.title }</TableCell>
                                <TableCell>{ lesson.description }</TableCell>
                                <TableCell>
                                    <Link href={`${baseUrl}/lessons/${lesson.slug}/slides/0`} passHref>
                                        <MaterialLink>
                                            <FontAwesomeIcon icon={ faDesktop } className={ classes.tableIcon } />
                                            ({ lesson.slides.length })
                                        </MaterialLink>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    { lesson.examples.length > 0 && (
                                        <Link href={`${baseUrl}/lessons/${lesson.slug}/examples`} passHref>
                                            <MaterialLink>
                                                <FontAwesomeIcon icon={ faCode } className={ classes.tableIcon } />
                                                ({ lesson.examples.length })
                                            </MaterialLink>
                                        </Link>
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
                                        <Link href={ `${baseUrl}/labs/${lesson.lab.slug}`} passHref>
                                            <MaterialLink>
                                                { lesson.lab.title }
                                            </MaterialLink>
                                        </Link>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            { (course.courseExtras || []).map(extra => (
                <LinkCard baseUrl={ baseUrl } title={ extra.title } relativeLink={ extra.route } key={ extra.route } />
            ))}
        </div>
    );
}

interface LinkCardProps {
    baseUrl: string;
    title: string;
    relativeLink: string;
}

function LinkCard({ baseUrl, title, relativeLink }: LinkCardProps) {
    return (
        <Card>
            <CardHeader title={ title } />
            <CardContent>
                <Link href={`${baseUrl}/${ relativeLink }`} passHref>
                    <MaterialLink>
                        View { title }
                    </MaterialLink>
                </Link>
            </CardContent>
        </Card>
    )
}

interface Props {
    course: CourseDefinition;
    baseUrl: string;
}