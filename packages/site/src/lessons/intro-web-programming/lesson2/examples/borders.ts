export const example = `
<html>
    <head>
        <style>
            div { 
                padding: 8px; 
                margin: 16px; 
            }
        </style>
    </head>
    <body>
        <div style="border: solid 1px">This is a basic border</div>
        <div style="border: dotted 2px #999">Here's a nice dotted border</div>
        <div style="border: solid 1px; border-top: dashed 2px blue">You can different borders on each side</div>
        <div style="border: solid 2px green; border-top-color: blue; border-bottom-width: 4px">
            You can override specific border properties
        </div>
        <div style="border: solid 2px green; border-radius: 8px">A border radius sometimes looks nice!</div>
    </body>
</html>`
export default example;
