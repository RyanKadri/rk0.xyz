import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { ContentSlide, PresentationContext } from "../../../../../presenter-core/src";

const styles = createStyles({
    container: {
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Ubuntu Mono', monospace;",
        fontSize: "3.5rem",
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

const _OutlineToHtml = ({ classes, context }: Props) => (
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

export const OutlineToHtml = withStyles(styles)(_OutlineToHtml)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}