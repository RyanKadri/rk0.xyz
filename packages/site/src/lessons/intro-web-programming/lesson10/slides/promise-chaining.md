```javascript
delay(1000)
    .then(() => console.log("Hi"))
    .then(() => delay(1000))
    .then(() => console.log("I'm"))
    .then(() => delay(1000))
    .then(() => console.log("Ryan"))
```