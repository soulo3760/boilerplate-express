let express = require('express');
let app = express();


app.get('/', (res,req){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})
























 module.exports = app;
