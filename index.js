const path = require('path');
const express = require('express');
const app = express();

app.use('/css',express.static(__dirname +'/css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/page.html'));
});

app.listen(50800);