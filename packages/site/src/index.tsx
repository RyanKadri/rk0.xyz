import React from "react";
import { render } from "react-dom";
import { PresentationViewer } from "./app-root";
import { lesson1 } from "./lessons/lesson1/slides";
import { lesson2 } from "./lessons/lesson2/slides";

const presentations = [
    lesson1,
    lesson2
];

render(
    <PresentationViewer presentations={presentations}></PresentationViewer>,
    document.getElementById("app")
)