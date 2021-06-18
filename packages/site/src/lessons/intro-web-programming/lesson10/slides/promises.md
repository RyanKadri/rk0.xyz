```javascript
const myPromise = fetch("https://some-url.com");

myPromise
    .then(response => { return response.json() })
    .then(response => { console.log(response) })
```