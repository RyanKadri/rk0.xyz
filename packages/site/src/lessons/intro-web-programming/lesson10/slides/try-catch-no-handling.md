```javascript
function generateReport(data) {
    const report = processData(data);
    // ...
}

function processData(data) {
    const complexReport = calculateReport(data); // Pretend this exists
    complexReport.addtionalInfo = extractAdditionalInfo(data);
    return complexReport;
}

function extractAddtionalInfo(data) {
    return library.extractAdditionalInfo(data); // What happens if this fails?
}
```