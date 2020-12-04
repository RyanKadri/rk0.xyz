import { parse } from "acorn";
import { Node } from "estree";
import React from "react";

interface Props {
    code: string;
}
export function JSExampleOutput({ code }: Props) {
    const ast = parse(code, { ecmaVersion: "latest", }) as Node;
    console.log(ast)
    return (
        <h1>JS is cool!</h1>
    )
}