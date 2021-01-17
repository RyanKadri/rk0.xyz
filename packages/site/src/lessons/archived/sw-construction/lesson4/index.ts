import { OutlineToHtml } from "../../intro-web-programming/lesson1/slides/outline-to-html";
import { XMLSlide } from "../../intro-web-programming/lesson1/slides/xml-slide";
import { ConditionalsExample } from "../../intro-web-programming/lesson4/slides/conditionals";
import { ForLoops } from "../../intro-web-programming/lesson4/slides/for-loops";
import { FunctionsExample } from "../../intro-web-programming/lesson4/slides/functions";
import { WhileLoops } from "../../intro-web-programming/lesson4/slides/while-loops";
import { ArraysExample } from "../../intro-web-programming/lesson5/slides/arrays";
import { Objects } from "../../intro-web-programming/lesson5/slides/objects";
import { OperatorsTable } from "../../intro-web-programming/lesson5/slides/operators";
import { DataTypes } from "../../intro-web-programming/lesson5/slides/simple";
import { VariablesRedux } from "../../intro-web-programming/lesson5/slides/variables";
import { FullStackDiagramSlide } from "./slides/full-stack";
import { Agenda, Bookreads, CrudApps, DOM, HTML, JavaScript, ModernApps, Title, WebTechPurposes } from "./slides/simple";

export const lesson4 = {
    title: 'Cyber Adventures in the World Wide Web',
    description: "Full Stack Development - Frontend",
    slug: "full-stack-1",
    slides: [
        Title,
        Agenda,
        ModernApps,
        CrudApps,
        FullStackDiagramSlide,
        WebTechPurposes,
        HTML,
        XMLSlide,
        OutlineToHtml,
        Bookreads,
        JavaScript,
        DataTypes,
        VariablesRedux,
        OperatorsTable,
        ConditionalsExample,
        ForLoops,
        WhileLoops,
        FunctionsExample,
        ArraysExample,
        Objects,
        DOM,
    ],
    examples: [
    ]
}