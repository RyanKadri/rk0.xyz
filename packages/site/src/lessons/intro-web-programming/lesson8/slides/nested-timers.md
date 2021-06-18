```javascript
function part1() {
    console.log("Hi.");
    setTimeout(part2, 1000);
}

function part2() {
    console.log("My")
    setTimeout(part3, 1000);
}

function part3() {
    console.log("name")
    setTimeout(part4, 1000);
}

function part4() {
    console.log("is")
    setTimeout(function() {
        console.log("Ryan")
    }, 1000);
}
```