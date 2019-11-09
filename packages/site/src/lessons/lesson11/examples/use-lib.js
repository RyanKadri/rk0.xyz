const dns = require("dns");
dns.resolve("google.com", (error, res) => {
    console.log(res)
});