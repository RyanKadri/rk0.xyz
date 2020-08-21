$(document).ready(function() {
    $("#thingy").click(function() {
        $("#thingy").after("<div>This is a div</div>")
    });

    $("#show-hidden").click(function() {
        $("#hidden-div").fadeToggle()
    });

    $("#change-list").click(function() {
        $("#change-list ~ul li")
            .css({ color: "red" })
            .text((i, text) => text + "!")
    })

});