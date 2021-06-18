```javascript
try {
    someSketchyFunction(); // This function might fail
} catch (e) {
    console.error(e.message) // What to do with the failure
}
```