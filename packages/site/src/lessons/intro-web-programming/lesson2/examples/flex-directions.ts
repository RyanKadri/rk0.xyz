export const example = `
<html>
    <head>
        <style>
            div { 
                border: solid 1px; 
                margin: 8px;
            } 
        </style>
    </head>
    <body>
        <div style="display: flex; flex-direction: row; justify-content: space-between">
            <section>Flex</section>
            <section>items</section>
            <section>in</section>
            <span>a</span>
            <span>row</span>
        </div>
        <br />
        <div style="display: flex; flex-direction: column; justify-content: space-between; height: 200px; width: 100px">
            <section>Flex</section>
            <section>items</section>
            <section>in</section>
            <span>a</span>
            <span>column</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; height: 200px">
            <section>Vertical</section>
            <section>centering</section>
            <section>used to be</section>
            <span>hard</span>
        </div>
    </body>
</html>`
export default example;