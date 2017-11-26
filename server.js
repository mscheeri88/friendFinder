// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = require("./app/data/friends.js"); //grabbing data from here

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================

//=========== Get Routes, tell server how to respond when visiting pages - plumbing =============//

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// If no matching route is found default to home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friendsArray);  //front end display in a way - hitting url route
});

//============== Post Route, pushes the data to the API page that is being submitted by the user from the form, first we had to import the 'friendsArray' data with the "require" up top, now we can push data to it with the post.  

app.post("/api/friends", userData, function(req, res) {
  var friendName = req.body.name;  //requewst 
  var friendScores = parseInt(req.body.scores);
  console.log("friend score", friendScores);
  
  var newFriend = {
    name: friendName,
    scores: friendScores
    }
    friendsArray.push(newFriend);  //put object in push
    res.json(newFriend);
});


//=========== What port number we are listening on, define variable up top ===========//

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});