```javascript
async function serverCall() {
    try {
        const resp = await fetch("https://some-server.com")
        const data = await resp.json();
        console.log(data);
    } catch(e) {
        console.log("Something went wrong with your request!")
    }
}
```