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
	res.render("portfolio", {stocks: stockAPI.stocks});
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
	//show new stock data
	var symbol = req.query.search;
	console.log("SYMBOL GET:" + symbol);
	var stock;
	if(symbol !== undefined){
		stock = stockAPI.getStockData([symbol]);
	}
	res.render("newStock", {data: stock, symbols: [symbol]});
});

app.post("/newStock", function(req, res){
	var numStocks = req.body.numofshares;
	var originalPrice = req.body.originalprice;
	var data = req.body.stockData;
	console.log("STOCK DATA: "+ data + " SHARES: "+ numStocks + " PRICE: "+ originalPrice);
	const newStock = {numStocks: numStocks, originalPrice: originalPrice, data: data}; 

	stockAPI.stocks.push(newStock);
	console.log("array: ", stockAPI.stocks);
	res.send("stock added successfuly");

});

app.listen(process.argv[2], function(){
	console.log("server listening...");
});

