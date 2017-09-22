var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Este será el servicio de mensappjeros');
});

module.exports = router;
