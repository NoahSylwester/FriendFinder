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
  friends.push(input);
  console.log(friends);
});

module.exports = router;