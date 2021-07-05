import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { InfoList } from "../../../slide-components/info-list";
import { MediaAssistSlideProps } from "../../slides";
import { ContentSlide } from "./content-slide";

const useStyles = makeStyles((_: Theme) => createStyles({
    mediaContainer: {
        display: "flex",
        justifyContent: "center",
        "& img": {
            border: "solid 2px #444",
            padding: 8,
        }
    }
}));

export function MediaAssistSlide({ Title, info, Media, context }: MediaAssistSlideProps) {
    const classes = useStyles();
    return (
        <ContentSlide Title={ Title } context={ context } Content={
            <>
                <InfoList items={ info } />
                <div className={ classes.mediaContainer }>
                    { Media }
                </div>
            </>
        } />
    )
}