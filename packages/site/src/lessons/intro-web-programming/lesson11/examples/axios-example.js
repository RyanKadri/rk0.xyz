const axios = require("axios");
axios.get("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } })
    .then(resp => console.log(resp.data.joke))