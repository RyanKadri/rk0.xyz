$("#my-header").html("Hi Class!");
$("#my-button").click(function() {
    $("#my-button + ul li")
        .text(function(i, origText) { return origText + "!" })
        .css({ color: "red" });
});