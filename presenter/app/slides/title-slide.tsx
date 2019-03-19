import { createStyles, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { ReactElement } from "react";
import { titleDecorator } from "../services/style-chunks";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const containerPadding = 128;
const subTitleSpacing = containerPadding / 2;

const styles = (theme: Theme) => createStyles({
    container: {
        height: "100%",
        padding: containerPadding,
        display: "flex",
        flexDirection: "column",
        marginTop: "auto"
    },
    titleContainer: {
        marginTop: "auto",
        ...titleDecorator(theme)
    },
    subtitleContainer: {
        marginTop: subTitleSpacing
    }
})

const _TitleSlide = ({ Title, Subtitle, classes, context }: Props) => {
    return (
        <div className={classes.container}>
            <div className={ classes.titleContainer }>
                { typeof Title === "string"
                    ? <Typography variant="h2">{ Title }</Typography>
                    : Title
                }
            </div>
            <div className={ classes.subtitleContainer }>
                { typeof Subtitle === "string"
                    ? <Typography variant="h3">{ Subtitle }</Typography>
                    : Subtitle
                }
            </div>
            <PageNumber context={context} />
        </div>
    )
}

export const TitleSlide = withStyles(styles)(_TitleSlide)

interface Props extends WithStyles<typeof styles> {
    Title: string | ReactElement;
    Subtitle: string | ReactElement;
    context: PresentationContext
}