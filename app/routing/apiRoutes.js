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
  friends.push(input);
  console.log(req.body);
  res.json(friends);
});

module.exports = router;