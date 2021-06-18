```javascript
const ryan = { 
    firstName: "Ryan", lastName: "Kadri", age: 26,
    getFullName() { return this.firstName + " " + this.lastName },
    birthdayParty() { this.age ++ }
};

console.log(ryan.getFullName());
```