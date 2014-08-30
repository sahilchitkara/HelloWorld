var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'This is Hello world Application' ,value:"Hello World"});
});

module.exports = router;
