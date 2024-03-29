import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, styled } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { CourseDefinition } from "../packages/presenter-core/src/services/types";
import { courseToStructuredData } from "../packages/site/src/analytics";
import { introToWebProgrammingFall2020 } from "../packages/site/src/lessons/intro-web-programming-f2020";
import { introToWebProgrammingFall2021 } from "../packages/site/src/lessons/intro-web-programming-f2021";
import { practicumInSW2022 } from "../packages/site/src/lessons/practicum-s2022";
import { miscPresentations } from "../packages/site/src/lessons/presentations";
import { practicumInSW2021 } from "../packages/site/src/lessons/sw-construction";
import { CourseCard } from "../packages/site/src/lessons/views/lesson-list/course-card";

const ListContainer = styled("main")(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
  width: "100%",
  maxWidth: "1300px",

  "& .groupContainer": {
    marginBottom: theme.spacing(3),
  },
  "& .expandIcon": {
    marginLeft: theme.spacing(1),
  },
  "& .expandHeader": {
    cursor: "pointer",
  },
}));

const courseGroups: CourseGroup[] = [
  {
    name: "Misc",
    courses: [miscPresentations],
    startExpanded: true,
  },
  {
    name: "Fall 2021 - Spring 2022",
    courses: [introToWebProgrammingFall2021, practicumInSW2022],
    startExpanded: false,
  },
  {
    name: "Fall 2020 - Spring 2021",
    courses: [introToWebProgrammingFall2020, practicumInSW2021],
    startExpanded: false,
  },
];

export default function CourseSelector() {
  return (
    <ListContainer>
      <Head>
        <title>Ryan Kadri - Temple Classes</title>
        <script
          type="application/ld+json"
          key="course-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseGroups.flatMap(group => group.courses).map(courseToStructuredData)),
          }}
        />
      </Head>
      {courseGroups.map(group => (
        <CourseGroupAccordion key={group.name} group={group} />
      ))}
    </ListContainer>
  );
}

interface GroupProps {
  group: CourseGroup;
}

export function CourseGroupAccordion({ group }: GroupProps) {
  const [expanded, setExpanded] = useState(group.startExpanded);

  return (
    <section className={"groupContainer"}>
      <header className={"expandHeader"} onClick={() => setExpanded(!expanded)}>
        <Typography display="inline">{group.name}</Typography>
        <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} className={"expandIcon"} />
      </header>
      {expanded && (
        <div>
          {group.courses.map(course => (
            <CourseCard key={course.slug} course={course} baseUrl={"/courses"} />
          ))}
        </div>
      )}
    </section>
  );
}

export interface CourseGroup {
  name: string;
  courses: CourseDefinition[];
  startExpanded: boolean;
}
