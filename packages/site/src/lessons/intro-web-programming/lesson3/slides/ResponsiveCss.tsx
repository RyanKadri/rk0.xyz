
import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";
import defaultSite from "./responsive-adapt-css-1.png";
import mobileSite from "./responsive-adapt-css-2.png";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: 16,
        margin: "0 -80px",
        "& img": {
            width: "49%"
        }
    },
});

const bullets = [
    "Sites send back the same code for all clients",
    "Code adapts to different devices",
    "User interface code is mostly consistent",
    "Most likely to support all features",
    "Most likely to have a consistent appearance"
];

export function ResponsiveCSS({ context }: Props) {
    const classes = useStyles()
    return (
        <ContentSlide Title="Approach 3: One Responsive Page" context={context} Content={
            <>
                <InfoList items={ bullets } />
                <div className={ classes.container }>
                    <img src={ defaultSite } />
                    <img src={ mobileSite } />
                </div>
            </>
        } />
    );
} 

interface Props {
    context: PresentationContext
}