import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../services/types";
import { ContentSlide } from "./content-slide";

const styles = createStyles({

})

const content = [
    "For Beginners",
    "Not an Overview",
    "Bi Weekly",
    "Interactive",
    "Flexible",
    "Project-Driven?"
]

const _WhatIsCourseSlide = ({ context }: Props) => (
    <ContentSlide Title="What is this course?" Content={content} context={context} />
)

export const WhatIsCourseSlide = withStyles(styles)(_WhatIsCourseSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}