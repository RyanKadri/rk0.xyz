```javascript
function add(a, b) {
    return a+b;
}

function addOne() {
    return function(a) {
        return add(a,1);
    }
}

function doSomething(arg) {
    return arg(2);
}
```