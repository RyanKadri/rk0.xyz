function waitBlocking(seconds) {
    const end = Date.now() + (seconds * 1000);
    let curr = Date.now();
    while(curr < end) {
        curr = Date.now()
    }
    const doneAlert = document.createElement("p");
    doneAlert.innerText = "Done Waiting!";
    document.body.appendChild(doneAlert);
}

function delay(n) {
    return () => {
        return new Promise((res, rej) => {
            setTimeout(res, n)
        })
    }
}

function delay(n) {
    return new Promise((res, rej) => {
        setTimeout(res, n)
    })
}