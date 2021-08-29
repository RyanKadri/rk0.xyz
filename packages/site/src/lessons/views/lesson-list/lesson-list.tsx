import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faFlask } from "@fortawesome/free-solid-svg-icons/faFlask";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardHeader, createStyles, Hidden, Link as MaterialLink, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
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
        gap: "16px",
        maxWidth: "1200px"
    },
    headerRow: {
        "& th, & td": {
            fontWeight: 700
        }
    },
    cardHeader: {
        fontSize: "1.25rem"
    },
    cardActions: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
        paddingTop: 0,
        "& a": {
            display: "block",
            padding: "12px 0"
        },
        "& a:first-of-type": {
            paddingTop: 0
        },
        "& a:last-of-type": {
            paddingBottom: 0
        }
    }
}));

export function LessonList(props: Props) {
    return (
        <>
            <Hidden implementation="css" mdUp>
                <LessonCardView {...props} />
            </Hidden>
            <Hidden implementation="css" smDown>
                <LessonTableView {...props} />
            </Hidden>
        </>
    )
}

function LessonCardView({ course, baseUrl }: Props) {
    const classes = useStyles();

    return <>{
        course.lessons.map((lesson) => (
            <Card className={ classes.lessonCard } key={ lesson.title }>
                <CardHeader title={ lesson.description } classes={ { title: classes.cardHeader } } />
                <footer className={ classes.cardActions }>
                    <Link href={`${baseUrl}/lessons/${lesson.slug}/slides/0`} passHref>
                        <MaterialLink>
                            <FontAwesomeIcon icon={ faDesktop } className={ classes.tableIcon } />
                            Slides
                        </MaterialLink>
                    </Link>
                    { lesson.lab && (
                        <Link href={`${baseUrl}/labs/${lesson.lab.slug}`} passHref prefetch={ false }>
                            <MaterialLink className={ classes.labLink }>
                                <FontAwesomeIcon icon={ faFlask } className={ classes.tableIcon } />
                                Lab: { lesson.lab.title }
                            </MaterialLink>
                        </Link>
                    )}
                    { lesson.examples && lesson.examples.length > 0 && (
                        <Link href={`${baseUrl}/lessons/${lesson.slug}/examples/0`} passHref>
                            <MaterialLink>
                                <FontAwesomeIcon icon={ faCode } className={ classes.tableIcon } />
                                Examples
                            </MaterialLink>
                        </Link>
                    )}
                    { lesson.recording
                        ? <MaterialLink href={lesson.recording.link} target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={ faVideo } className={ classes.tableIcon } />
                            Recording
                        </MaterialLink>
                        : null 
                    }
                </footer>
            </Card>
        )) }
        { (course.courseExtras || []).map(extra => (
            <LinkCard baseUrl={ baseUrl } 
                      title={ extra.title } 
                      relativeLink={ extra.route } 
                      key={ extra.route }
                    />
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
                            <TableCell>#</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Slides</TableCell>
                            <TableCell>Examples</TableCell>
                            <TableCell>Recording</TableCell>
                            <TableCell>Lab</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { course.lessons.map((lesson, lessonNum) => (
                            <TableRow key={ lesson.title }>
                                <TableCell>{ lessonNum + 1 }</TableCell>
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
                                        <Link href={`${baseUrl}/lessons/${lesson.slug}/examples/0`} passHref>
                                            <MaterialLink>
                                                <FontAwesomeIcon icon={ faCode } className={ classes.tableIcon } />
                                                ({ lesson.examples.length })
                                            </MaterialLink>
                                        </Link>
                                    )}
                                </TableCell>
                                <TableCell>
                                    { lesson.recording
                                        ? <MaterialLink href={ lesson.recording.link }  aria-label="View Recording">
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
    const classes = useStyles();
    return (
        <Card className={ classes.lessonCard }>
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