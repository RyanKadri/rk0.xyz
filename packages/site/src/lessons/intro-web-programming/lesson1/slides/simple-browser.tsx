import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";

const styles = createStyles({
    browser: {
        border: "solid 2px #777",
        borderRadius: 4,
        height: "100%",
        width: "100%",
    },
    search: {
        width: "100%",
        padding: "12px 24px",
        boxSizing: "border-box",
        backgroundColor: "#e1e1e1"
    },
    searchInput: {
        width: "100%",
        border: "solid 1px #ccd",
        padding: 8
    },
    viewport: {
        color: "#444",
        fontFamily: 'Roboto'
    },
    content: {
        padding: 16
    },
    contentHeader: {
        margin: 0,
        padding: "8px 24px",
        backgroundColor: "hsla(227, 70%, 50%, 1)",
        color: "white"
    },
    container: {
        padding: 32,
        height: "100%"
    }
})

const _SimpleBrowserSlide = ({ classes }: Props) => (
    <div className={classes.container}>
        <div className={ classes.browser }>
            <header className={ classes.search }>
                <input className={ classes.searchInput } type="text" placeholder="Enter a URL" />
            </header>
            <main className={ classes.viewport }>
                <h1 className={ classes.contentHeader }>MyFaceGram</h1>
                <div className={ classes.content }>You have 617 Notifications!</div>
            </main>
        </div>
    </div>
)

export const SimpleBrowserSlide = withStyles(styles)(_SimpleBrowserSlide)

interface Props extends WithStyles<typeof styles> {
    context: PresentationContext
}