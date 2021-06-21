```javascript
function printHello() {
    console.log("Hello!");
}

function annoying() {
    console.log("Is this annoying?");
}

setTimeout(printHello, 1000);
setInterval(annoying, 1000);
```