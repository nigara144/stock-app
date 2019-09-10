var express = require("express"),
    app     = express(),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("landing");
});

app.get("/portfolio", function(req,res){
	res.render("portfolio");
});

//show login form
app.get("/login", function(req,res){
	res.render("login");
});

//handle login logic
app.post("/login",function(req, res){
	res.redirect("/portfolio");
});

app.listen(process.argv[2], function(){
	console.log("server listening...");
});

