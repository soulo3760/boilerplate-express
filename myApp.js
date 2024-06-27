let express = require('express');
let app = express();


app.get('/', function(res,req){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})
























 module.exports = app;
