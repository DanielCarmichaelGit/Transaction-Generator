// import axios for api call
const { default: axios } = require("axios");
const fs = require('fs');
var nameArray = [];


setTimeout(() => {
    for (let i = 0; i < 300; i++) {
        axios.get('https://api.namefake.com').then(response => {
            let thisName = response.data.name
            fs.appendFileSync("./JavaScript/names.js", JSON.stringify(thisName) + ",\n");
        }).catch(error => console.error(error))
    }
}, 5000)

