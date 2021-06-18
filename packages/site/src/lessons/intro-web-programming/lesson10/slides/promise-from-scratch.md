```javascript
function delay(nMillis) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, nMillis)
    })
}
```