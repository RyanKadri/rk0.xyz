fetch("/hello")
    .then(resp => resp.text())
    .then(data => {
        const messageElement = document.getElementById("message")
        messageElement.innerText = data;
    })

function updateName() {
    const myInput = document.getElementById("name-input");
    const newName = myInput.value;
    fetch(`/hello?name=${newName}`, { method: "POST" });
}