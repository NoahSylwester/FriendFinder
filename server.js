const express = require('express');
const path = require('path');

const apiRoutes = require('/app/routing/apiRoutes.js');
const htmlRoutes = require('/app/routing/htmlRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
