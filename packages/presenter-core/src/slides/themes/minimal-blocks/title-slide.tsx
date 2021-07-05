import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { titleDecorator } from "../../../services/style-chunks";
import { PageNumber } from "../../components/page-number";
import { TitleSlideProps } from "../../slides";

const containerPadding = 128;
const subTitleSpacing = containerPadding / 2;

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    },
    title: {
        fontSize: "2.5rem",
    },
    subTitle: {
        fontSize: "2.0rem"
    }
}))

export function TitleSlide({ Title, Subtitle, context }: TitleSlideProps) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={ classes.titleContainer }>
                { typeof Title === "string"
                    ? <Typography variant="h3" component="h1" className={ classes.title }>{ Title }</Typography>
                    : Title
                }
            </div>
            <div className={ classes.subtitleContainer }>
                { typeof Subtitle === "string"
                    ? <Typography variant="h4" component="h2" className={ classes.subTitle}>{ Subtitle }</Typography>
                    : Subtitle
                }
            </div>
            <PageNumber context={context} />
        </div>
    )
}