var express = require("express"),
    app     = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	request  = require("request"),
	stockAPI = require("./stockAPI");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("landing");
});

app.get("/portfolio", function(req,res){
	res.render("portfolio");
});

//show register form
app.get("/register", function(req,res){
	res.render("register");
});

//show login form
app.get("/login", function(req,res){
	res.render("login");
});

//handle login logic
app.post("/login",function(req, res){
	res.redirect("/portfolio");
});

//show search page
app.get("/newStock", function(req,res){
	var query = req.query.search;
	console.log("QUERY:" + query);
	stockAPI.stockSymbols.push(query);
	console.log(stockAPI.stockSymbols);
	res.render("newStock", {data: stockAPI.getStockData(stockAPI.stockSymbols)});
});

app.listen(process.argv[2], function(){
	console.log("server listening...");
});

