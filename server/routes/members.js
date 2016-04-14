var express = require('express');
var router = express.Router();
var db = require('../src/db.js');
var dotenv = require('dotenv');
dotenv.load();

/* GET index page. */
router.get('/', function(req, res, next) {
  console.log('got to the right members route');
  db.Members().then(function(data) {
    res.send({payload:data});
  })
});

router.get('/:id', function(req, res, next) {
  console.log('got to the show member route with id:');
  db.member(req.params.id).then(function(data) {
    res.send({payload:data});
  })
});

module.exports = router;
