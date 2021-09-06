
import { makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { InfoList } from "../../../../../../presenter-core/src/slides/components/info-list";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";
import defaultSite from "./anandtech-desktop.png";
import mobileSite from "./anandtech-mobile.png";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 16,
        margin: "0 -80px",
        "& img": {
            height: "400px"
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
                    <a href="https://www.anandtech.com/" target="_blank">
                        <img src={ defaultSite.src } alt="Desktop view of AnandTech homepage" />
                    </a>
                    <a href="https://www.anandtech.com/" target="_blank">
                        <img src={ mobileSite.src } alt="Tablet view of AnandTech homepage" />
                    </a>
                </div>
            </>
        } />
    );
} 

interface Props {
    context: PresentationContext
}