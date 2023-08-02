// Create web server 
var express = require('express');
var router = express.Router();

// Create route for /comments
router.get('/', function(req, res) {
    res.send('GET route on things.');
});

// Create route for /comments/post
router.post('/', function(req, res) {
    res.send('POST route on things.');
});

// Export module
module.exports = router;
