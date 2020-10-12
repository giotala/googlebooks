const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// var io = require('socket.io')(80);
// var cfg = require('./config.json');
// var tw = require('node-tweet-stream')(cfg);
// tw.track('socket.io');
// tw.track('javascript');
// tw.on('tweet', function(tweet){
//   io.emit('tweet', tweet);
// });
module.exports = router;
