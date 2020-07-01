
//jshint esversion: 6

const express = require ("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>hello world</h1>");
});

app.get("/contact", function (req,res){
  res.send("contact me at: brittany@gmail.com");
});

app.get("/about", function(req, res){
  res.send("Hello, my name is Brittany and i love my dog");
});


app.listen(3000 , function() {
  console.log("Server started on port 3000");
});
