fetch("http://localhost:8080/test")
    .then(resp => resp.json())
    .then(data => {
        document.getElementById("title").innerText = "Hello " + data.name
    });