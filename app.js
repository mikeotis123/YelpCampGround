var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

 var campgrounds = [
{name: 'Salmon Creek', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg23JSvRfefg17Pn5pFJ64R_7p6FlZlMu4vp9WgT_rdEwwtuMEAA'},
{name: 'Granite hill', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlt7fW1YA1_B462rAyHQMfxZbWjzFyGaoTNbAiUqVSSVVq2R8'},
{name: 'Mountain of youth', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbmkCU4Z1QkQ5oEAPTv66cQ7026lMSuy9sQ7exm3aS_Pc4QMsbA'},
{name: 'Salmon Creek', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg23JSvRfefg17Pn5pFJ64R_7p6FlZlMu4vp9WgT_rdEwwtuMEAA'},
{name: 'Granite hill', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlt7fW1YA1_B462rAyHQMfxZbWjzFyGaoTNbAiUqVSSVVq2R8'},
{name: 'Mountain of youth', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbmkCU4Z1QkQ5oEAPTv66cQ7026lMSuy9sQ7exm3aS_Pc4QMsbA'}
    ];

app.get('/', function(req, res){
    res.render('landing');
});


app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campgrounds: campgrounds});
});


app.post('/campgrounds', function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	res.redirect('/campgrounds');
});


app.get('/campgrounds/new', function(req, res){
	res.render('new.ejs');
});


app.listen(3000, function(req, res){
    console.log('The server is listening');
});