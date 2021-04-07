import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { ReactElement } from "react";
import { PresentationContext } from "../services/types";
import { InfoList, NestedListInfo } from "../slide-components/info-list";
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

interface Props {
    Title: string | ReactElement;
    info: (string | NestedListInfo | ReactElement)[];
    Media: ReactElement;
    context: PresentationContext
}

export function MediaAssistSlide({ Title, info, Media, context }: Props) {
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