export const example = `
<html>
    <head>
        <style> 
            div { 
                display: inline-block; 
                border: solid 1px; 
            } 
        </style>
    </head>
    <body>
        <div style="margin: 16px">This element has a margin</div>
        <span>So the next element is pushed away</span>
        <br />
        <br />
        <div style="padding: 16px">This element has padding</div>
        <span>So the next element can be close</span>
        <br />
        <br />
        <div style="padding: 16px; margin: 16px;">This element has margin and padding</div>
        <span>Check it out in the developer tools!</span>
    </body>
</html>`
export default example;