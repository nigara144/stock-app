var express = require("express");
var app     = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("landing");
});

app.listen(process.argv[2], function(){
	console.log("server listening...");
});

