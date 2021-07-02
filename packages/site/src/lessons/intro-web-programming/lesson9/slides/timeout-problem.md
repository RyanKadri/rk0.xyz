const code = synJS`
function sayHi() {
    console.log("Hi")
}

setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
setTimeout(sayHi, 1000);
`