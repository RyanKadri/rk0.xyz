function greet(a, b) {
    console.log("Hi");
    setTimeout(function() {
        console.log(" my name is Ryan");
        setTimeout(function() {
            console.log("Goodbye")
        }, b * 1000)
    }, a * 1000)
}