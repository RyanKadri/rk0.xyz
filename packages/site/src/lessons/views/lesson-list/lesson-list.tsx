import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faFlask } from "@fortawesome/free-solid-svg-icons/faFlask";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Hidden,
  Link as MaterialLink,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import Link from "next/link";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";

const CardViewParent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  lessonCard: {
    cursor: "pointer",
  },
  cardHeader: {
    fontSize: "1.25rem",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    paddingTop: 0,
    "& a": {
      display: "block",
      padding: "12px 0",
    },
    "& a:first-of-type": {
      paddingTop: 0,
    },
    "& a:last-of-type": {
      paddingBottom: 0,
    },
    tableIcon: {
      marginRight: 8,
    },
    labLink: {
      display: "block",
    },
  },
});
const TableViewParent = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "16px",
  maxWidth: "1600px",

  "& .tablePaper": {
    overflowX: "auto",
    fontSize: 12,
    gridColumn: "1/4",
  },
  "& .headerRow": {
    "& th, & td": {
      fontWeight: 700,
    },
  },
  "& .extrasColumn": {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  tableIcon: {
    marginRight: 8,
  },
});

export function LessonList(props: Props) {
  return (
    <>
      <Hidden implementation="css" mdUp>
        <LessonCardView {...props} />
      </Hidden>
      <Hidden implementation="css" lgDown>
        <LessonTableView {...props} />
      </Hidden>
    </>
  );
}

function LessonCardView({ course, baseUrl }: Props) {
  return (
    <CardViewParent className={"cardViewParent"}>
      {course.lessons.map(lesson => (
        <Card className={"lessonCard"} key={lesson.description}>
          <CardHeader title={lesson.description} classes={{ title: "cardHeader " }} />
          <footer className={"cardActions"}>
            <Link href={`${baseUrl}/lessons/${lesson.slug}/slides/0`} passHref>
              <MaterialLink>
                <FontAwesomeIcon icon={faDesktop} className={"tableIcon"} />
                Slides
              </MaterialLink>
            </Link>
            {lesson.lab && (
              <Link href={`${baseUrl}/labs/${lesson.lab.slug}`} passHref prefetch={false}>
                <MaterialLink className={"labLink"}>
                  <FontAwesomeIcon icon={faFlask} className={"tableIcon"} />
                  Lab: {lesson.lab.title}
                </MaterialLink>
              </Link>
            )}
            {lesson.externalExamples?.length === 1 && lesson.examples.length === 0 ? (
              <MaterialLink href={lesson.externalExamples[0].url} target="_blank">
                <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                Examples
              </MaterialLink>
            ) : (
              lesson.examples &&
              lesson.examples.length > 0 && (
                <Link href={`${baseUrl}/lessons/${lesson.slug}/examples/0`} passHref>
                  <MaterialLink>
                    <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                    Examples
                  </MaterialLink>
                </Link>
              )
            )}
            {lesson.recording ? (
              <MaterialLink href={lesson.recording.link} target="_blank" rel="noopener">
                <FontAwesomeIcon icon={faVideo} className={"tableIcon"} />
                Recording
              </MaterialLink>
            ) : null}
          </footer>
        </Card>
      ))}
      {(course.courseExtras || []).map(extra => (
        <LinkCard baseUrl={baseUrl} title={extra.title} relativeLink={extra.route} key={extra.route} />
      ))}
    </CardViewParent>
  );
}

function LessonTableView({ course, baseUrl }: Props) {
  return (
    <TableViewParent>
      <Paper className={"tablePaper"}>
        <Table>
          <TableHead>
            <TableRow className={"headerRow"}>
              <TableCell>#</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Slides</TableCell>
              <TableCell align="center">Examples</TableCell>
              <TableCell>Recording</TableCell>
              <TableCell>Lab</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course.lessons.map((lesson, lessonNum) => (
              <TableRow key={lesson.description}>
                <TableCell>{lessonNum + 1}</TableCell>
                <TableCell>{lesson.description}</TableCell>
                <TableCell>
                  <Link href={`${baseUrl}/lessons/${lesson.slug}/slides/0`} passHref>
                    <MaterialLink>
                      <FontAwesomeIcon icon={faDesktop} className={"tableIcon"} />({lesson.slides.length})
                    </MaterialLink>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {lesson.externalExamples?.length === 1 && lesson.examples.length === 0 ? (
                    <MaterialLink href={lesson.externalExamples[0].url} target="_blank">
                      <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                    </MaterialLink>
                  ) : (
                    lesson.examples.length > 0 && (
                      <Link href={`${baseUrl}/lessons/${lesson.slug}/examples/0`} passHref>
                        <MaterialLink>
                          <FontAwesomeIcon icon={faCode} className={"tableIcon"} />(
                          {lesson.examples.length + (lesson.externalExamples?.length ?? 0)})
                        </MaterialLink>
                      </Link>
                    )
                  )}
                </TableCell>
                <TableCell>
                  {lesson.recording ? (
                    <MaterialLink href={lesson.recording.link} aria-label="View Recording">
                      <FontAwesomeIcon icon={faVideo} className={"tableIcon"} />
                    </MaterialLink>
                  ) : null}
                </TableCell>
                <TableCell>
                  {lesson.lab && (
                    <Link href={`${baseUrl}/labs/${lesson.lab.slug}`} passHref>
                      <MaterialLink>{lesson.lab.title}</MaterialLink>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className={"extrasColumn"}>
        {(course.courseExtras || []).map(extra => (
          <LinkCard baseUrl={baseUrl} title={extra.title} relativeLink={extra.route} key={extra.route} />
        ))}
      </div>
    </TableViewParent>
  );
}

interface LinkCardProps {
  baseUrl: string;
  title: string;
  relativeLink: string;
}

function LinkCard({ baseUrl, title, relativeLink }: LinkCardProps) {
  return (
    <Link href={`${baseUrl}/${relativeLink}`} passHref>
      <a style={{ textDecoration: "none" }}>
        <Card className={"lessonCard"}>
          <CardHeader title={title} />
        </Card>
      </a>
    </Link>
  );
}

interface Props {
  course: CourseDefinition;
  baseUrl: string;
}
