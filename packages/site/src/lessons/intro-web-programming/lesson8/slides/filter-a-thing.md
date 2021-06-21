```javascript
function removeEvents(numbers) {
    const result = [];
    for(const num of numbers) {
        if(num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
}

function cancelJanice(people) {
    const result = [];
    for(const person of people) {
        if(person.includes("Janice")) {
            result.push(person);
        }
    }
    return result;
}
```