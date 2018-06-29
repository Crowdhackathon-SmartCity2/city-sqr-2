var express = require("express");
var app = express();
var dbApp = express();


app.get("/", function(req, res) {
   res.send("Hi"); 
});

app.get("/publicWorks", function(req,res){
    dbApp.get("http://localhost:3000/api/publicWorks", function(req2, res2){
        console.log(res2.text);
    });
});

app.get("/repeat/:word/:times", function(req, res) {
    var word = req.params.word;
    var times = req.params.times;
    var repeatedStr= " ";
    for(var i=0; i<times;i++)
        repeatedStr += word + " ";
    res.send(repeatedStr);
});

app.get("*",function(req, res) {
   res.send("404"); 
});

app.listen(4200, process.env.IP, function(){
    console.log("hii");
});

// dbApp.listen(3000, process.env.IP, function(){
//     console.log("listening to server");
// });