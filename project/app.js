var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var mongoose=  require("mongoose");
//mongoose.connect()
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');

app.use('/static',express.static('static'));
app.get('/', function(request,response){
 
    response.sendFile(__dirname + "/home.html");

});

app.get('/contact',function(request,response){

response.sendFile(__dirname + "/contact.html");
});


app.get('/login', function(request,response){

    response.sendFile(__dirname + '/login.html');
});


app.post('/login',urlencodedParser, function(request,response){
    response.sendFile(__dirname + '/login.html');   

    var email = request.body.email;
    var pass = request.body.pass;
    if (email == "kunal@gmail.com" && pass == "123456")
    {
         response.render('log',{data: request.body});
         
    }
    else{
        response.redirect('/');
    }
});
app.listen(3000);
console.log("server started on 3000");