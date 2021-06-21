```javascript
function processFile() {
    const fileData = readFile("budget.txt");
    const largestExpense = determineLargestExpense(fileData);
    updateNetwork(largestExpense);
    console.log("Done processing.")
}
```