const bodyParser = require('body-parser');
const express = require('express' );
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
    console.log(req);
});
app.post("/",function(req,res){
  
var num1 =  Number(req.body.num1);
var num2 = Number(req.body.num2);

console.log(req.body);

var result = num1 + num2;

res.send("The calculation result is "+result);
});
app.listen(port, function(){
console.log("listening on local host port 3000");

});

