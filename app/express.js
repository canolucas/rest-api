"use strict";
var express = require('express');
var app = express();
app.get('/api/:continent', function (req, res) {
    var continent = req.params.continent;
    var info = "asd";
    res.send('info');
});
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
