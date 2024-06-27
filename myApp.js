let express = require('express');
const { sendFile } = require('express/lib/response');
let app = express();


app.get("/", (req, res) {
sendFile(__dirname + "/views/index.html");
    });
























 module.exports = app;
