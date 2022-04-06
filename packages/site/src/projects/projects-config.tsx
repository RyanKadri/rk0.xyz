import { Link, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import bingo from "../../../../public/projects/bingo.webp";
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
    name: "Bing.0",
    link: "https://bingo.rk0.xyz",
    image: bingo,
    imageAlt: "Bing.0 site screenshot",
    description: (
      <>
        <Typography variant="h6">Frontend</Typography>
        <Typography variant="body1">
          A simple&nbsp;
          <Link href="https://create-react-app.dev/">Create-React-App</Link>
          &nbsp;built with&nbsp;
          <Link href="https://react.semantic-ui.com/">Semantic UI</Link>
          &nbsp;as a component library. Uses plain&nbsp;
          <Link href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">WebSockets</Link>
          &nbsp;for real-time game updates. Hosted with&nbsp;
          <Link href="https://www.netlify.com/">Netlify</Link>
          &nbsp;(for free!)
        </Typography>
        <Typography variant="h6" style={{ marginTop: 16 }}>
          Backend
        </Typography>
        <Typography variant="body1">
          <Link href="https://aws.amazon.com/lambda/">AWS Lambdas</Link>
          &nbsp;backed by&nbsp;
          <Link href="https://aws.amazon.com/dynamodb/">DynamoDB</Link>. &nbsp;WebSocket persistent connections
          using&nbsp;
          <Link href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html">
            API Gateway's WebSocket implementation
          </Link>
          . &nbsp;Deployed with the&nbsp;
          <Link href="https://www.serverless.com/">Serverless Framework</Link>
          &nbsp;and&nbsp;
          <Link href="https://www.terraform.io/">Terraform</Link>
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
