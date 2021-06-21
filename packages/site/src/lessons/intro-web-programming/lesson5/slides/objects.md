```javascript
const ryan = { name: "Ryan", age: 26, job: "Developer", id: "abc123" };
person.age ++;
delete person.name;
person.firstName = "Ryan";
person.lastName = "Kadri";

const employees = {};
employees[ryan.id] = ryan;
employees["abc123"] === ryan;
```