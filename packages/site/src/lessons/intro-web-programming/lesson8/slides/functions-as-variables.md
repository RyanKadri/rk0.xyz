```javascript
function sayHello() {
    console.log("Hello")
}

function doSomethingTwice(something) {
    something();
    something();
}

doSomethingTwice(sayHello)
```