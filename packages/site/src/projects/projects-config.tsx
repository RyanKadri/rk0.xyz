import { Link, Typography } from "@mui/material";
import { ReactNode } from "react";
import utils from "../../../../public/projects/utils.webp";
import mandelbrot from "../../../../public/projects/mandelbrot.webp";
import resume from "../../../../public/projects/resume.webp";

export interface ProjectConfig {
  name: string;
  link: string;
  image: StaticImageData;
  imageAlt: string;
  description: ReactNode;
}

export const projects: ProjectConfig[] = [
  {
    name: "utils.rk0.xyz",
    link: "https://utils.rk0.xyz",
    image: utils,
    imageAlt: "utils.rk0.xyz site screenshot",
    description: (
      <>
        <Typography variant="body1">
          A collection of frontend-only calculators and utilities. Everything runs entirely in the browser with no
          backend — no data ever leaves your device.
        </Typography>
      </>
    ),
  },
  {
    name: "Mandelbrot Viewer",
    link: "https://mandelbrot.rk0.xyz",
    image: mandelbrot,
    imageAlt: "An image of the Mandelbrot set",
    description: (
      <>
        <Typography variant="body1">
          This app was mostly written in plain TypeScript. I used the Canvas API to plot the Mandelbrot set. In order to
          improve graphing performance, I used WebWorkers (for parallelism) and WebAssembly (compiled from Rust)
        </Typography>
        <Typography variant="body1">
          I wrote a{" "}
          <Link href="https://medium.com/capital-one-tech/optimizing-graphing-performance-on-the-web-660c88753a01">
            blog post
          </Link>{" "}
          with more details about performance-tuning TypeScript
        </Typography>
        <Typography variant="body1">
          <Link href="https://github.com/RyanKadri/mandelbrot-viewer">Github</Link>
        </Typography>
      </>
    ),
  },
  {
    name: "My Resume",
    link: "https://resume.rk0.xyz",
    image: resume,
    imageAlt: "My Resume",
    description: (
      <>
        <Typography variant="body1">
          For my resume, I wanted to play around with Server Side Rendering and using JSX outside of a library. I wanted
          to make my resume so that it ran without any runtime dependencies. Instead, I had fun overloading the project
          with some weird build-time tooling.
        </Typography>
        <Typography variant="body1">
          <Link href="https://github.com/RyanKadri/simple-resume-builder">Github</Link>
        </Typography>
      </>
    ),
  },
];
