```javascript
fetch("https://some-site.com")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(e => console.error("Oh no! There was an error!"))
```