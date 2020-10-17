//require express
var express = require('express');
//require body parser
var bodyParser = require('body-parser');
//require node-fetch
var fetch = require('node-fetch');
//create express object, call express
var app = express();
//gets port information
const port = process.env.PORT || 3000;

//tell application to use EJS for templates
app.set('view engine', 'ejs');
//make styles public
app.use(express.static("public"));
//tell app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

//fetch XKCD information and send to front end as JSON data
app.get('/', function(req, res){
    fetch('http://xkcd.com/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('index', {data:data})
    });
});

//fetch XKCD information and send to front end as JSON data
//Will display a random comic from 1/1/2006 until 10/17/2020
app.get('/random', function(req, res){
    let randComic = rand(1, 2373);
    fetch('http://xkcd.com/' + randComic +'/info.0.json')
    .then(res => res.json())
    .then(data => {
        res.render('random', {data:data})
    });
});

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}

//server setup
app.listen(port, function(){
    console.log('Listening on port ' + port)
});