import React from "react";
import { PresentationContext } from "../services/types";
import { TitleSlide } from "./title-slide";

export function IntroSlide({ context }: Props) {
    return (
        <TitleSlide Title="Intro to Web Design" Subtitle="Ryan Kadri" context={context} />
    )
}

interface Props {
    context: PresentationContext;
}