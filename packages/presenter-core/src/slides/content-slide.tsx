import { createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { titleDecorator } from "../services/style-chunks";
import { PresentationContext } from "../services/types";
import { InfoList, NestedListInfo } from "../slide-components/info-list";
import { PageNumber } from "../slide-components/page-number";

const styles = (theme: Theme) => createStyles({
    container: {
        padding: "48px 128px 0px 128px"
    },
    titleContainer: {
        ...titleDecorator(theme)
    }
})

const _ContentSlide = ({ classes, Title, Content, context }: Props) => (
    <div className={ classes.container }>
        <div className={classes.titleContainer}>
            { typeof Title === "string"
                ? <Typography variant="h2">{Title}</Typography>
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

export const ContentSlide = withStyles(styles)(_ContentSlide)

interface Props extends WithStyles<typeof styles> {
    Title: string | ReactElement;
    Content: (string | NestedListInfo | ReactElement)[] | ReactElement;
    context: PresentationContext;
}