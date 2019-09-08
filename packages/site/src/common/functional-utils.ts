import { ExampleDefinition } from "../../../presenter-core/src/services/types";

export function identity<T>(input: T): T {
    return input;
}

export function htmlTemplate(body: string, head: string = ""): string {
    return `<html>
                <head>
                    ${ head }
                </head>
                <body>
                    ${ body }
                </body>
            </html>`
}

export function bodyExample(title: string, body: string, head = ""): ExampleDefinition {
    return {
        title,
        code: {
            displayCode: body,
            formCode( display ) {
                return htmlTemplate(display, head)
            }
        }
    }
}