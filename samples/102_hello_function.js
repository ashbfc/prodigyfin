// Overview of edge.js: http://tjanczuk.github.com/edge

var edge = require('../lib/edge');

var hello = edge.func(function () {/*
	async (input) => 
	{ 
		return ".NET welcomes " + input.ToString(); 
	}
*/});

hello('Node.js', function (error, result) {
	if (error) throw error;
	var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, "ccc", port,"ashji")
})
	console.log(result);
});
