import { createStyles, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { calculate, compare } from "specificity";
import { PresentationContext } from "../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../presenter-core/src/slides/slides";

const useStyles = makeStyles(createStyles({
    selectorRowContainer: {
        display: "grid",
        gridGap: 16,
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "stretch"
    },
    comparisonRowContainer: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center"
    },
    selectorContainer: {
        padding: 24,
        borderRadius: 8,
        border: "solid 2px #ccc",
        marginTop: 24,
        "& input": {
            fontSize: "inherit",
            border: "solid 2px #ccc",
            marginLeft: 8,
            borderRadius: 4,
            width: "100%",
            fontFamily: "monospace"
        }
    },
    comparisonRes: {
        fontSize: "2rem",
        margin: "0 16px",
    }
}))

export function SpecificityComparison({ context }: Props) {

    const classes = useStyles();
    const [ selector1, setSelector1 ] = useState("");
    const [ selector2, setSelector2 ] = useState("");
    const spec1 = calcSpecificity(selector1);
    const spec2 = calcSpecificity(selector2);

    return (
        <ContentSlide Title="Selector Specificity" context={ context } Content={
            <>
            <div className={ classes.selectorRowContainer }>
                <div className={ classes.selectorContainer }>
                    <label>
                        Selector 1
                        <input value={ selector1 } onChange={ e => setSelector1(e.currentTarget.value) }/>
                    </label>
                </div>
                <div className={ classes.selectorContainer }>
                    <label>
                        Selector 2
                        <input value={ selector2 } onChange={ e => setSelector2(e.currentTarget.value) } />
                    </label>
                </div>
            </div>
            <div className={ classes.comparisonRowContainer }>
                <SpecificityBox specificity={ spec1 } />
                <span className={ classes.comparisonRes }>
                    { calcOperator(selector1, selector2) }
                </span>
                <SpecificityBox specificity={ spec2 } />
            </div>
            </>
        }/>
    )
}

function SpecificityBox({ specificity } : {specificity: Specificity | null }) {
    const classes = useStyles();

    return (
        <div className={ classes.selectorContainer }>
            <p>IDs: { specificity?.ids ?? "??" }</p>
            <p>Classes / Attributes: { specificity?.classes ?? "??" }</p>
            <p>Tags: { specificity?.tags ?? "??" }</p>
        </div>
    )
}

function calcOperator(selector1: string, selector2: string) {
    const res = compare(selector1, selector2);

    return res === -1
        ? "<"
        : res === 1
            ? ">"
            : "="
}

function calcSpecificity(selector: string): Specificity | null {
    const res = calculate(selector)?.[0]?.specificityArray;
    return !res
        ? null
        : {
            ids: res[1],
            classes: res[2],
            tags: res[3],
        };
}

interface Specificity {
    ids: number;
    classes: number;
    tags: number;
}

interface Props {
    context: PresentationContext
}