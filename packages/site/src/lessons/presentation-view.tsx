import React from "react";
import { RouteComponentProps } from "react-router";
import { PresentationViewer } from "../../../presenter-core/src";
import { lesson1 } from "./lesson1/slides";
import { lesson2 } from "./lesson2/slides";

const presentations = [
    lesson1,
    lesson2
];

export const PresentationView = ({ match }: RouteComponentProps) => (
    <PresentationViewer presentations={ presentations } baseUrl={match.url.replace(/\/$/, "")} />
)