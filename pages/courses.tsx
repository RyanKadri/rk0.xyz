import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Head from "next/head";
import React, { useState } from "react";
import { CourseDefinition } from "../packages/presenter-core/src/services/types";
import { introToWebProgrammingFall2020 } from "../packages/site/src/lessons/intro-web-programming";
import { practicumInSW2021 } from "../packages/site/src/lessons/sw-construction";
import { CourseCard } from "../packages/site/src/lessons/views/lesson-list/course-card";

const useStyles = makeStyles(theme => createStyles({
    listContainer: {
        padding: theme.spacing(2),
        flexGrow: 1,
        width: "100%",
        maxWidth: "1300px",
    },
    groupContainer: {
        marginBottom: theme.spacing(3)
    },
    expandIcon: {
        marginLeft: theme.spacing(1)
    },
    expandHeader: {
        cursor: "pointer"
    }
}))

const courseGroups: CourseGroup[] = [
    { 
        name: "Fall 2020 - Spring 2021", 
        courses: [ introToWebProgrammingFall2020, practicumInSW2021 ],
        startExpanded: true
    }
]

export default function CourseSelector() {
    const classes = useStyles();
    return (
        <main className={ classes.listContainer }>
            <Head>
                <title>Ryan Kadri - Temple Classes</title>
            </Head>
            { courseGroups.map((group) => (
                <CourseGroupAccordion key={ group.name } group={ group } />
            ))}
        </main>
    );
}

interface GroupProps {
    group: CourseGroup;
}

export function CourseGroupAccordion({ group }: GroupProps) {
    const [expanded, setExpanded] = useState(group.startExpanded);
    const classes = useStyles();

    return (
        <section className={ classes.groupContainer }>
            <header className={ classes.expandHeader } onClick={ () => setExpanded(!expanded) }>
                <Typography display="inline">{ group.name }</Typography>
                <FontAwesomeIcon icon={ expanded ? faChevronUp : faChevronDown } className={ classes.expandIcon } />
            </header>
            { expanded && (
                <div>
                    { group.courses.map(course => (
                        <CourseCard key={course.slug} course={course} baseUrl={ "/courses" } />
                    ))}
                </div> 
            )}
        </section>
    )
}

export interface CourseGroup {
    name: string;
    courses: CourseDefinition[];
    startExpanded: boolean;
}