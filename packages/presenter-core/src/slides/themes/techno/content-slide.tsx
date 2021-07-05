import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { InfoList } from "../../components/info-list";
import { PageNumber } from "../../components/page-number";
import { ContentSlideProps } from "../../slides";

const useStyles = makeStyles((_: Theme) => createStyles({
    container: {
        padding: "48px 128px 0px 128px",
        minHeight: "100%"
    },
}))

export function ContentSlide({ Title, Content, context, classes = {}, options = { } }: ContentSlideProps) {
    const ownClasses = useStyles();
    return (
        <div className={ `${ownClasses.container} ${classes.viewport || ""}` }>
            <div>
                { typeof Title === "string"
                    ? <Typography variant="h4" component="h1">{Title}</Typography>
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