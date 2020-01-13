import { Link, makeStyles, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import type { PresentationContext } from "../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles({
    referenceList: {
        fontSize: "2rem",
        "& li": {
            marginBottom: 16
        }
    }
});

export function ReferencesSlide({ Title = "References", references, context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title={Title} context={ context } Content={
            <ul className={ classes.referenceList }>{
                references.map(link => (
                    <li key={link.url}>
                        <Typography className={ classes.referenceList }>{ link.label } </Typography> 
                        <Link href={link.url} target="_blank">{ link.url }</Link>
                    </li>
                ))
            }</ul>
        } />
    )
}

export function generateReferencesSlide(references: Reference[], title = "References") {
    return function({ context }: { context: PresentationContext }) {
        return (
            <ReferencesSlide Title={ title }
                            references={ references } 
                            context={ context }/>
        )
    }
}

interface Reference {
    url: string;
    label: string;
}

interface Props {
    Title?: string | ReactElement;
    references: Reference[];
    context: PresentationContext
}