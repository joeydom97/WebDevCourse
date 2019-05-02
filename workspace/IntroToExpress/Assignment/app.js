var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/pig", function(req,res ){
    res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req,res ){
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req,res ){
    res.send("The dog says 'Woof Woof'");
});

app.get("/repeat/:word/:num", function(req, res){
    var num =req.params.num;
   var i = parseInt(num, 10);
   var result = "";
    var words = req.params.word;
    for(var x = 0; x < i; x++){
       result += words + " ";
    }
     res.send(result);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started")
}); 