import React from "react";
import { PresentationContext } from "../../../../../presenter/app/services/types";
import { TitleSlide } from "../../../../../presenter/app/slides/title-slide";

export function IntroSlide({ context }: Props) {
    return (
        <TitleSlide Title="Intro to Web Design" Subtitle="Ryan Kadri" context={context} />
    )
}

interface Props {
    context: PresentationContext;
}