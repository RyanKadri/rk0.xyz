function wait(milliseconds) {
    const end = Date.now() + (milliseconds);
    let curr = Date.now();
    while(curr < end) {
        curr = Date.now()
    }
    console.log("Done");
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