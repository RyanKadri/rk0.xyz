import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, ListItemAvatar, ListItemText, Paper, styled } from "@mui/material";
import Link from "next/link";
import { CourseDefinition } from "../../../../../presenter-core/src/services/types";

const StyledCard = styled(Paper)({
  margin: "8px 0",
  padding: 8,
  display: "flex",
  alignItems: "center",
  "&:hover": {
    textDecoration: "none",
  },
});

export function CourseCard({ course, baseUrl }: Props) {
  const numExamples = course.lessons.reduce((acc, el) => acc + (el.examples || []).length, 0);
  const numLabs = course.lessons.filter(lesson => !!lesson.lab).length;
  const desc = `${course.lessons.length} lessons - ${numExamples} examples - ${numLabs} labs`;

  return (
    <Link href={`${baseUrl}/${course.slug}`} passHref>
      <a style={{ textDecoration: "none", display: "block" }}>
        <StyledCard>
          <ListItemAvatar>
            <Avatar color="primary">{course.icon ? <FontAwesomeIcon icon={course.icon} /> : course.title[0]}</Avatar>
          </ListItemAvatar>
          <section>
            <ListItemText primary={course.title} secondary={course.description} />
            <ListItemText secondary={desc} />
          </section>
        </StyledCard>
      </a>
    </Link>
  );
}

interface Props {
  course: CourseDefinition;
  baseUrl: string;
}
