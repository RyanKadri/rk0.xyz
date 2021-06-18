```javascript
function findAThing(myArray, decisionPoint) {
    for(const num of numbers) {
        if(decisionPoint(num)) {
            return num;
        }
    }
}

function isLessThan10(number) {
    return number < 10;
}

function startsWithS(name) {
    return name.startsWith("S")
}

findAThing([1,2,5,7,11,14], isLessThan10);
findAThing(["Adelaide", "Nathan", "Sky", "Sarah"], startsWithS);
```