```javascript
fetch("https://some-url.com")
    .then(response => { return response.json() })
    .then(response => { console.log(response) })
```