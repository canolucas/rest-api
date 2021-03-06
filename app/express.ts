/// <reference path="../typings/express/express.d.ts" />

import express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/:continent', function (req, res) {
	var continent = req.params.continent;
	var fs = require('fs');

	require.extensions['.txt'] = function (module, filename) {
	    module.exports = fs.readFileSync(filename, 'utf8');
	};

	var countries = require("./countries/" + continent + ".txt");

	res.write(countries);
	res.end();
});

var server = app.listen(8080, function () {
    var host:string = server.address().address;
    var port:number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
