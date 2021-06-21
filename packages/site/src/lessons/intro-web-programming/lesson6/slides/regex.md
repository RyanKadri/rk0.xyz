```javascript
const usernameChecker = /^[a-z][a-zA-Z0-9_]*$/;
usernameChecker.test("rjk123"); // true
usernameChecker.test("rjk.xyz"); // false
usernameChecker.test("rjk_xyz"); // true
usernameChecker.test("") // false
usernameChecker.test("123") // false

const longString = "My name is Ryan Kadri. Who are you?";
const matches = longString.match(/My name is (.*?)\./);
console.log(matches[1]); // Ryan Kadri
```