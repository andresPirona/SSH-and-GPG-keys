var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'probandofttt  Mensappjeros' });
});

router.get('/hola', function(req, res, next) {
  res.render('index', { title: 'Hola Mensappjeros' });
});

module.exports = router;
