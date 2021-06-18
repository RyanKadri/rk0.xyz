```javascript
function processFile() {
    const fileData = readFile("budget.txt", checkExpenses);
}

function checkExpenses() {
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense, printSuccess);
}

function printSuccess() {
    console.log("Done processing.")
}
```