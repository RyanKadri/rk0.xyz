import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { PageNumber } from "../../components/page-number";
import { DefinitionSlideProps } from "../../slides";

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

export function DefinitionSlide({ context, Term, Definition }: DefinitionSlideProps) {
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
