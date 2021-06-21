```javascript
let evenNumbers = [2, 3, 6, 8];
evenNumbers[1] = 4 // Oops;
evenNumbers.push(10); // [2, 4, 6, 8, 10]
evenNumbers.unshift(0); // [0, 2, 4, 6, 8, 10];
evenNumbers.splice(2, 1);
```