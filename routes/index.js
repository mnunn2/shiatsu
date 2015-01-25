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

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'contact page' });
});

router.get('/treatment', function(req, res) {
  res.render('treatment', { title: 'your treatment' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Lou' });
});




module.exports = router;
