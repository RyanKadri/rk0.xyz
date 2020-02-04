import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { titleDecorator } from "../services/style-chunks";
import { PresentationContext } from "../services/types";
import { InfoList, NestedListInfo } from "../slide-components/info-list";
import { PageNumber } from "../slide-components/page-number";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: "48px 128px 0px 128px",
        minHeight: "100%"
    },
    titleContainer: {
        ...titleDecorator(theme)
    }
}))

export function ContentSlide({ Title, Content, context, classes = {} }: Props) {
    const ownClasses = useStyles();
    return (
        <div className={ `${ownClasses.container} ${classes.viewport || ""}` }>
            <div className={ownClasses.titleContainer}>
                { typeof Title === "string"
                    ? <Typography variant="h4" component="h1">{Title}</Typography>
                    : Title
                }
            </div>
            { !Array.isArray(Content) 
                ? Content
                : <InfoList items={ Content } />
            }
            <PageNumber context={context} />
        </div>
    )
}

interface Props {
    Title: string | ReactElement;
    Content: (string | NestedListInfo | ReactElement)[] | ReactElement;
    context: PresentationContext;
    classes?: {
        viewport?: string;
    }
}