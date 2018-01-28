var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
// 	{name: 'Salmon Creek',
// 	 image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg23JSvRfefg17Pn5pFJ64R_7p6FlZlMu4vp9WgT_rdEwwtuMEAA'
// 	}, function(err, campground){
// if(err){
// 	console.log(err);
// } else {
// 	console.log('Newly created campground');
// 	console.log(campground);
// }
// 	});

app.get('/', function(req, res){
    res.render('landing');
});


app.get('/campgrounds', function(req, res){
    
    Campground.find({}, function(err, allCampgrounds){
    	if(err){
    		console.log(err);
    	} else {
 res.render('campgrounds', {campgrounds: allCampgrounds});
    	}
    });
});

app.post('/campgrounds', function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}

Campground.create(newCampground, function(err, newlyCreated){
	if(err){
		console.log(err);
	} else {
		res.redirect('/campgrounds');
    }
	});
});


app.get('/campgrounds/new', function(req, res){
	res.render('new.ejs');
});


app.listen(3000, function(req, res){
    console.log('The server is listening');
});