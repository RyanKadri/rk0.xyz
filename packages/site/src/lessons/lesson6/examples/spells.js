async function fetchSpells() {
    const resp = await fetch("https://official-joke-api.appspot.com/jokes/ten");
    const jokes = await resp.json();
    let html = "";
    for(const joke of jokes) {
        html += `<tr><td>${joke.setup}</td><td>${joke.punchline}</td></tr>`
    }

    const listContainer = document.getElementById("joke-list");
    listContainer.innerHTML = html;
}

fetchSpells();