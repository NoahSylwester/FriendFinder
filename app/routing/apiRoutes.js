var express = require('express');
var router = express.Router();
var path = require('path');
var friends = require('../data/friends.js');

// Basic route that sends the user first to the AJAX Page
router.get("/friends", function(req, res) {
  res.json(friends);
});
//FriendFinder/app/routing/app/public/home.html'

router.post("/friends", function(req, res) {
  var input = req.body;
  // input is received as string, needs to be converted to numbers on server
  for (let i = 0; i < input.scores.length; i++) {
    input.scores[i] = parseInt(input.scores[i], 10);
  }
  var minimum = 50;
  var match;

// match input to most appropriate friend in list
  for (let i = 0; i < friends.length; i++) {
    var total = 0;
    for (let j = 0; j < friends[i].scores.length; j++) {
      total += Math.abs(friends[i].scores[j] - input.scores[j])
    }
    if  (minimum > total) {
      minimum = total;
      match = friends[i];
    }
  }


  friends.push(input);
  console.log(req.body);
  res.json(match);
});

module.exports = router;