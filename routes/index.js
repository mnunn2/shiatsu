var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Shiatsu with Lou' });
});

router.get('/shiatsu', function(req, res) {
  res.render('shiatsu', { title: 'About Shiatsu' });
});

router.get('/faq', function(req, res) {
  res.render('faq', { title: 'Frequently asked questions' });
});



module.exports = router;
