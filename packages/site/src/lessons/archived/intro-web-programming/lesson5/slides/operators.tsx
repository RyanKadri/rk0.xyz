
import { AppBar, createStyles, makeStyles, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { PresentationContext } from "../../../../../../../presenter-core/src/services/types";
import { ContentSlide } from "../../../../../../../presenter-core/src/slides/content-slide";

const useStyles = makeStyles(createStyles({
    container: {
        padding: "16px 0"
    },
    tabIndicator: {
        display: "none"
    },
    table: {
        fontSize: "1rem"
    },
    tabs: {
        marginBottom: 16
    }
}))

const operatorInfo = [
    { 
        category: "Math",
        operators: [
            op("+", "Addition", "1 + 2", "3"),
            op("-", "Subtraction", "2 - 1", "1"),
            op("*", "Multiplication", "4 * 4", "16"),
            op("/", "Division", "4 / 2", "2"),
            op("%", "Remainder", "7 % 5", "2"),
            op("**", "Exponent", "3 ** 2", "9"),
            op("++", "Increment", "b++", "Variable b is set to b + 1"),
            op("--", "Decrement", "b--", "Variable b is set to b - 1")
        ]
    },
    {
        category: "Assignment",
        operators: [
            op("=", "Assignment", "a = 1", "Variable a is set to 1"),
            op("+=", "Addition Assignment", "a += 3", "Variable a is set to a + 3"),
            op("-=", "Subtraction Assignment", "a -= 3", "Variable a is set to a - 3"),
            op("*=", "Multiplication Assignment", "a *= 3", `""`),
            op("/=", "Division Assignment", "a /= 3", `""`)
        ]
    },
    {
        category: "Comparison",
        operators: [
            op("==", "Loose Equality", `3 == "3"`, "true"),
            op("===", "Strict Equality", `3 === "3"`, "false"),
            op("!=", "Loose Inequality", `3 != "3"`, "false"),
            op("!==", "Strict Inequality", `3 !== "3"`, "true"),
            op(">", "Greater than", "4 > 3", "true"),
            op("<", "Less than", "4 < 3", "false"),
            op(">=", "Greater than or equal", "4 >= 4", "true"),
            op("<=", "Less than or equal", "4 <= 5", "false")
        ]
    },
    {
        category: "Logical",
        operators: [
            op("&&", "And", `5 > 4 && 7 > 6 && 3 > 4`, "false"),
            op("||", "Or", `5 > 6 || 1 > 2 || 3 > 2`, "true"),
            op("!", "Not", `!(3 > 2)`, "false"),
        ]
    }
]

export function OperatorsTable({ context }: Props) {
    const classes = useStyles();
    const [currCategory, setCategory] = useState(0);
    const currentGroup = operatorInfo[currCategory];

    return (
        <ContentSlide Title="Operators" context={context} Content={
            <div className={ classes.container }>
                <AppBar position="static" color="primary" className={ classes.tabs }>
                    <Tabs value={ currCategory }
                          onChange={ (_, newvalue) => setCategory(newvalue) }
                          classes={{ indicator: classes.tabIndicator }}>
                        { operatorInfo.map(group => (
                            <Tab key={ group.category } label={ group.category } className={ classes.table } />
                        )) }
                    </Tabs>
                </AppBar>
                <Table className={ classes.table }>
                    <TableHead>
                        <TableRow>
                            <TableCell className={ classes.table }>Operator</TableCell>
                            <TableCell className={ classes.table }>Description</TableCell>
                            <TableCell className={ classes.table }>Example</TableCell>
                            <TableCell className={ classes.table }>Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { currentGroup.operators.map(op => (
                            <TableRow key={ op.symbol }>
                                <TableCell className={ classes.table }>{ op.symbol }</TableCell>
                                <TableCell className={ classes.table }>{ op.description }</TableCell>
                                <TableCell className={ classes.table }>{ op.example || "" }</TableCell>
                                <TableCell className={ classes.table }>{ op.result || "" }</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </div>
        } />
    );
}

interface Props {
    context: PresentationContext
}

interface OperatorDefinition {
    symbol: string;
    description: string;
    example?: string;
    result?: string;
}

function op(symbol : string, description: string, example?: string, result?: string): OperatorDefinition {
    return { symbol, description, example, result };
}