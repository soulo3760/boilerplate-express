let express = require('express');
let app = express();


console.log('Hello World')

app.get('/', function(req, res){
    res.send("Hello Express")
})
app.get('/', (res,req){
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})
























 module.exports = app;
