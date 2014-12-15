// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// res.render() function compiles your template, inserts locals there and creates HTML output out of those two things
// res.render() will look in a views folder

// set up route for index page
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3},
        { name: 'Martini', drunkness: 5 },
		{ name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// set up route for about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// set the application to show on port 8080
app.listen(8080);
console.log('8080 is the magic port');