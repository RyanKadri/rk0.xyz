import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import c from "classnames";
import React from "react";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";
import { useBaseStyles } from "./base-styles";

const useStyles = makeStyles((_: Theme) => createStyles({
    container: {
        padding: "48px 128px 0px 128px",
        minHeight: "100%"
    },
}))

export function ContentSlide({ Title, Content, context, classes = {}, options = { } }: ContentSlideProps) {
    const ownClasses = useStyles();
    const baseClasses = useBaseStyles();

    return (
        <div className={ c(ownClasses.container, classes.viewport, baseClasses.container) }>
            <div>
                { typeof Title !== "string"
                    ? <Typography variant="h4" component="h1" className={ baseClasses.title }>
                        {Title}
                    </Typography>
                    : Title
                }
            </div>
            { !Array.isArray(Content) 
                ? Content
                : <InfoList items={ Content } useOrderedLists={ options.useOrderedLists ?? false } />
            }
            <PageNumber context={context} />
        </div>
    )
}