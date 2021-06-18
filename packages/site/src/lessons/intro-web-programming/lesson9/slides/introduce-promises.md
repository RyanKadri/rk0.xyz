```javascript
async function printHello() {
    console.log("Hello.");
    // Delay is not a built-in function. But it's one you can write'
    delay(1000)()
        .then(() => console.log("My"))
        .then(delay(1000))
        .then(() => console.log("name"))
        .then(delay(1000))
        .then(() => console.log("is"))
        .then(delay(1000))
        .then(() => console.log("Ryan"));
}
```