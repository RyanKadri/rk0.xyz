
import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { CodeBlock } from "../../../../../../../presenter-core/src/slide-components/code-block";
import { InfoList } from "../../../../../../../presenter-core/src/slide-components/info-list";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    code: {
        fontSize: 26,
        userSelect: "text"
    }
}))

const slideItems = [
    "Used for validating strings, extracting values, and more",
    "Has a weird syntax",
    "Fairly consistent across languages"
];

const code = `
const usernameChecker = /^[a-z][a-zA-Z0-9_]*$/;
usernameChecker.test("rjk123"); // true
usernameChecker.test("rjk.xyz"); // false
usernameChecker.test("rjk_xyz"); // true
usernameChecker.test("") // false
usernameChecker.test("123") // false

const longString = "My name is Ryan Kadri. Who are you?";
const matches = longString.match(/My name is (.*?)\./);
console.log(matches[1]); // Ryan Kadri
`.trim();

export function RegularExpressions({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title="Regular Expressions" context={context} Content={
            <>
                <InfoList items={ slideItems }></InfoList>
                <CodeBlock language="js" code={ code } className={ classes.code }></CodeBlock>
            </>
        } />
    );
}

interface Props {
    context: PresentationContext
}