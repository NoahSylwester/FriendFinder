var express = require('express');
var router = express.Router();
var path = require('path');

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
  res.sendFile(path.join(`${__dirname}/../public/`, "home.html"));
});
//FriendFinder/app/routing/app/public/home.html'

router.get("/survey", function(req, res) {
  res.sendFile(path.join(`${__dirname}/../public/`, "survey.html"));
});

module.exports = router;