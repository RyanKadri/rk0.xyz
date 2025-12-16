import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faFlask } from "@fortawesome/free-solid-svg-icons/faFlask";
import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
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
      <LessonCardView {...props} />
      <LessonTableView {...props} />
    </>
  );
}

function LessonCardView({ course, baseUrl }: Props) {
  return (
    <CardViewParent sx={{ display: {xs:"block", md: "none"}}} className={"cardViewParent"}>
      {course.lessons.map(lesson => (
        <Card className={"lessonCard"} key={lesson.description}>
          <CardHeader title={lesson.description} classes={{ title: "cardHeader " }} />
          <footer className={"cardActions"}>
            <MaterialLink component={Link} href={`${baseUrl}/lessons/${lesson.slug}/slides/0`}>
              <FontAwesomeIcon icon={faDesktop} className={"tableIcon"} />
              Slides
            </MaterialLink>
            {lesson.lab && (
              <MaterialLink
                className={"labLink"}
                component={Link}
                href={`${baseUrl}/labs/${lesson.lab.slug}`}
                prefetch={false}
              >
                <FontAwesomeIcon icon={faFlask} className={"tableIcon"} />
                Lab: {lesson.lab.title}
              </MaterialLink>
            )}
            {lesson.externalExamples?.length === 1 && lesson.examples.length === 0 ? (
              <MaterialLink href={lesson.externalExamples[0].url} target="_blank">
                <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                Examples
              </MaterialLink>
            ) : (
              lesson.examples &&
              lesson.examples.length > 0 && (
                <MaterialLink component={Link} href={`${baseUrl}/lessons/${lesson.slug}/examples/0`}>
                  <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                  Examples
                </MaterialLink>
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
    <TableViewParent sx={{ display: { xs:"none", lg: "block"}}}>
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
                  <MaterialLink component={Link} href={`${baseUrl}/lessons/${lesson.slug}/slides/0`}>
                    <FontAwesomeIcon icon={faDesktop} className={"tableIcon"} />({lesson.slides.length})
                  </MaterialLink>
                </TableCell>
                <TableCell align="center">
                  {lesson.externalExamples?.length === 1 && lesson.examples.length === 0 ? (
                    <MaterialLink href={lesson.externalExamples[0].url} target="_blank">
                      <FontAwesomeIcon icon={faCode} className={"tableIcon"} />
                    </MaterialLink>
                  ) : (
                    lesson.examples.length > 0 && (
                      <MaterialLink component={Link} href={`${baseUrl}/lessons/${lesson.slug}/examples/0`}>
                        <FontAwesomeIcon icon={faCode} className={"tableIcon"} />(
                        {lesson.examples.length + (lesson.externalExamples?.length ?? 0)})
                      </MaterialLink>
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
                    <MaterialLink component={Link} href={`${baseUrl}/labs/${lesson.lab.slug}`}>
                      {lesson.lab.title}
                    </MaterialLink>
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
    <Link href={`${baseUrl}/${relativeLink}`} style={{ textDecoration: "none" }}>
      <Card className={"lessonCard"}>
        <CardHeader title={title} />
      </Card>
    </Link>
  );
}

interface Props {
  course: CourseDefinition;
  baseUrl: string;
}
