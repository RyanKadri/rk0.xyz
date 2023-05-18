import { Card, CardContent, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import { projects } from "../packages/site/src/projects/projects-config";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    maxWidth: 1200,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(),
    },
  },
  card: {
    display: "flex",
    padding: theme.spacing(2),
    gap: theme.spacing(),
    marginBottom: theme.spacing(),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  content: {
    padding: 0,
  },
  cardTitle: {
    marginBottom: theme.spacing(),
  },
  screenshot: {
    width: 350,
    height: 250,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "initial",
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ProjectView() {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <Head>
        <title>My Projects</title>
      </Head>
      <Typography variant="h4" className={classes.title}>
        Personal Projects
      </Typography>
      {projects.map(project => (
        <Card key={project.link} className={classes.card} component="article">
          <CardContent className={classes.content}>
            <Typography variant="h5" className={classes.cardTitle}>
              <Link href={project.link} target="_blank" rel="noopener">
                {project.name}
              </Link>
            </Typography>
            {project.description}
          </CardContent>
          <a href={project.link} target="_blank" rel="noopener">
            <img src={project.image.src} className={classes.screenshot} alt={project.imageAlt} />
          </a>
        </Card>
      ))}
    </main>
  );
}
