export const example = `
<html>
    <head></head>
    <body>
        <div style="display: block">Elements that are display block</div>
        <div style="display: block">each go on their own line</div>
        <br />
        <div style="display: inline">Elements that are display inline</div>
        <div style="display: inline">show up next to each other</div>
        <br />
        <div style="display: block; margin: 16px; padding: 16px; border: solid 1px; height: 100px">
            Block elements can have many properties set
        </div>
        <br />
        <div style="display: inline; margin: 16px; padding: 16px; border: solid 1px; height: 100px">
            Inline not so much
        </div>
        <br />
        <br />
        <div style="display: inline-block; margin: 8px; border: solid 1px">Luckily, there is</div>
        <div style="display: inline-block; padding: 8px; border: solid 1px; width: 64px">Inline block</div>
    </body>
</html>`
export default example;