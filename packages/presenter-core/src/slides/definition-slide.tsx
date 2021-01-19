import { makeStyles, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import { PresentationContext } from "../services/types";
import { PageNumber } from "../slide-components/page-number";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%"
    },
    definitionBox: {
        width: "70%"
    }
})


interface Props {
    context: PresentationContext;
    Term: ReactNode;
    Definition: ReactNode;
}
export function DefinitionSlide({ context, Term, Definition }: Props) {
    const classes = useStyles();
    return (
    <div className={ classes.container }>
        <dl className={ classes.definitionBox }>
            <dt>
                {
                    typeof Term === "string"
                        ? <Typography variant="h4">{Term}</Typography>
                        : Term
                }
            </dt>
            <dd>
            { 
                typeof Definition === "string"
                    ? <Typography variant="body1">{Definition}</Typography>
                    : Definition
            }
            </dd>
        </dl>
        <PageNumber context={context} />
    </div>
    )
}
