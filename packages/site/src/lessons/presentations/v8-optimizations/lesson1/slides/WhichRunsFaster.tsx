import { createStyles, Link, makeStyles } from "@material-ui/core";
import c from "classnames";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../../../../presenter-core/src/slides/components/code-block";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/themes/blank/content-slide";

export const useStyles = makeStyles(_ => createStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
        marginTop: 64,
        marginBottom: "3rem"
    },
    denseContainer: {
        marginTop: "1rem",
        marginBottom: "1rem",
        fontSize: "0.65rem",
    },
    link: {
        textAlign: "center",
        fontSize: "1.15rem",
    },
}))

interface Props {
    leftCode: SyntaxHighlightedBlock;
    rightCode: SyntaxHighlightedBlock;
    link: string;
    options?: {
        codeSize?: "small" | "medium"
    }
}
export function ComparisonSlide({ leftCode, rightCode, link, options }: Props) {
    return function ({ context }: { context: PresentationContext }) {
        const classes = useStyles();
        const dense = options?.codeSize === "small";

        return (
            <ContentSlide Title="Which Runs Faster?" context={ context } Content={
                <>
                    <div className={ c(classes.container, { [ classes.denseContainer ]: dense }) }>
                        <CodeBlock code={ leftCode } />
                        <CodeBlock code={ rightCode } />
                    </div>
                    <Link href={ link } className={ classes.link }>
                        { link }
                    </Link>
                </>
            } />
        )
    }
}