async function loadCivilizations() {
    const resp = await fetch("http://api.icndb.com/jokes/random/10");
    const data = await resp.json();
    const container = document.getElementById("civilization-container");
    let jokeList = "<ul>";
    for(const joke of data.value) {
        jokeList += `<li>${joke.joke}</li>`
    }
    jokeList += "</ul>";

    container.innerHTML = jokeList;
}

loadCivilizations();