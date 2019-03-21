import React from "react";
import { render } from "react-dom";
import { lesson1 } from "../../lessons/lesson1/presentation/src/slides";
import { lesson2 } from "../../lessons/lesson2/presentation/src";
import { PresentationViewer } from "./app-root";

const presentations = [
    lesson1,
    lesson2
];

render(
    <PresentationViewer presentations={presentations}></PresentationViewer>,
    document.getElementById("app")
)