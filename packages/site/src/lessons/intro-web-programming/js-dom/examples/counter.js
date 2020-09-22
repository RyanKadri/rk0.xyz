let counter = 0;
document.querySelector("#counter-button").addEventListener("click", buttonClicked);

function buttonClicked() {
    counter = counter + 1;
    document.querySelector("#counter-button + span + span").innerText = counter
}