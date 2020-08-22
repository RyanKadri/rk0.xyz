import { makeStyles } from "@material-ui/core";
import { PresentationContext } from "packages/presenter-core/src/services/types";
import React from "react";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles({
    container: {
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Ubuntu Mono', monospace;",
        fontSize: "1.25rem",
        paddingTop: 32
    },
    article: {
        color: "hsla(120, 50%, 50%, 1)",
        "& section": {
            paddingLeft: 32,
            margin: 8
        }
    },
    section1: {
        color: "hsla(0, 50%, 50%, 1)"
    },
    section2: {
        color: "purple"
    },
    sectionContent: {
        color: "black",
        "& ul": {
            margin: 0
        },
        "& p": {
            margin: 0
        }
    }
})

export function OutlineToHtml({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="HTML" context={context} Content={
            <div className={classes.container}>
                <section className={classes.article}>
                    Article
                    <section className={classes.section1}>
                        Section
                        <section className={classes.sectionContent}>
                            <ul>
                                <li>Header</li>
                                <li>Paragraph</li>
                                <li>Paragraph</li>
                            </ul>
                        </section>
                    </section>
                    <section className={classes.section2}>
                        Section
                        <section className={classes.sectionContent}>
                            <ul>
                                <li>Header</li>
                                <li>...</li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section className={classes.article}>
                    {"<article>"}
                    <section className={classes.section1}>
                        {"<section>"}
                        <section className={classes.sectionContent}>
                            <p>{"<header>...</header>"}</p>
                            <p>{"<p>...</p>"}</p>
                            <p>{"<p>...</p>"}</p>
                        </section>
                        {"</section>"}
                    </section>
                    <section className={classes.section2}>
                        {"<section>"}
                        <section className={classes.sectionContent}>
                            <p>{"<header>...</header>"}</p>
                            <p>...</p>
                        </section>
                        {"</section>"}
                    </section>
                    {"</article>"}
                </section>
            </div>
        } />
    )
}

interface Props {
    context: PresentationContext;
}