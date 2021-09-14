import { Card, CardContent, CardHeader, createStyles, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react-markdown";
import { CodeBlock, SyntaxHighlightedBlock } from "../../../../presenter-core/src/slides/components/code-block";
import { useMarkdownLabStyles } from "./lab";

const useStyles = makeStyles(theme => createStyles({
    container: {
        padding: `${ theme.spacing(1) }px ${ theme.spacing(2) }px`,
        maxWidth: "1200px"
    },
    termList: {
        margin: `${theme.spacing(2)}px 0`,
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: theme.spacing(2)
    },
    codeBlock: {
        marginTop: theme.spacing()
    }
}))

interface Props {
    items: GlossaryItem[]
}
export default function GlossaryPage({ items }: Props) {
    const classes = useStyles();
    const labStyles = useMarkdownLabStyles();
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ searchResults, setSearchResults ] = useState<GlossaryItem[]>([]);

    useEffect(() => {
        const term = searchTerm.toLowerCase();
        setSearchResults(items
            .filter(item => item.term.toLowerCase().includes(term))
            .slice(0, 10)
        );
    }, [ searchTerm ])

    return (
        <div className={ classes.container }>
            <h1>Glossary</h1>
            <TextField type="search" variant="outlined" label="Search" fullWidth
                       value={ searchTerm } 
                       onChange={ e => { setSearchTerm(e.currentTarget.value) } } />
            <div className={ classes.termList }>
                { searchResults.map(item => (
                    <Card>
                        <CardHeader title={ item.term } />
                        <CardContent className={ labStyles.container }>
                            <Typography>{ item.description }</Typography>
                            { item.code && 
                                (<CodeBlock code={ item.code } className={ classes.codeBlock } /> )
                            }
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export interface GlossaryItem {
    term: string;
    description: string | ReactNode;
    code?: SyntaxHighlightedBlock;
}