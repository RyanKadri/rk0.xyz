
import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import defaultSite from "./responsive-detect-browser-1.png";
import mobileSite from "./responsive-detect-browser-2.png";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        "& img": {
            width: "45%"
        }
    },
});

const bullets = [
    "Uses the same URLs and backend logic but sends back different content",
    "Links work again",
    "Features are often still missing",
    "Code and design scheme may became more unified (or may not)"
];

export function DetectBrowser({ context }: Props) {
    const classes = useStyles()
    return (
        <ContentSlide Title="Approach 2: Detect the Browser" context={context} Content={
            <>
                <InfoList items={ bullets } />
                <div className={ classes.container }>
                    <Image src={ defaultSite } />
                    <Image src={ mobileSite } />
                </div>
            </>
        } />
    );
} 

interface Props {
    context: PresentationContext
}