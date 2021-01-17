import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles({
    container: {
        display: "flex",
        margin: "32px 0px"
    },
});

const approaches = [
    { 
        name: "Static Site", 
        pros: ["Servers are well-optimized", "Can tune many dials to get the best performance"], 
        cons: [ "Can't show dyanmic content" ] 
    },
    {
        name: "Server-Side Dynamic Pages",
        pros: ["Can be very fast for some workloads", "Often write everything in one language", "Works well with SEO"],
        cons: ["Ties the presentation logic to the data/business logic", "Harder to write multiple clients", "Fails weird"]
    },
    {
        name: "Static Content + APIs",
        pros: ["Cleaner separation between business logic and presentation", "Supports more flexible clients", "More responsive updates"],
        cons: ["More work on client side", "Worse SSO experience"]
    }
]

export function WebAppComparison({ context }: Props) {
    const classes = useStyles();
    return (
        <ContentSlide Title='Web Application Comparison' context={context} Content={
            <div className={ classes.container }>
                <Table>
                    <TableHead>
                        <TableRow>
                            {[ "Approach", "Pros", "Cons"].map(head => <TableCell key={head} children={ head } />)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { approaches.map(approach => (
                            <TableRow key={ approach.name }>
                                <TableCell>{ approach.name }</TableCell>
                                <TableCell><ul>{ approach.pros.map(pro => <li key={ pro }>{ pro }</li>) }</ul></TableCell>
                                <TableCell><ul>{ approach.cons.map(con => <li key={ con }>{ con }</li>) }</ul></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}