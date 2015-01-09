var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/shiatsu', function(req, res) {
  res.render('shiatsu', { title: 'About Shiatsu' });
});

module.exports = router;
