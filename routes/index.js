var express = require('express');
var router = express.Router();
var request = require('request');


var happyThings = [
  {
    name: 'Games',
    pointVal:'0'
  },
  {
    name: 'Mountains',
    pointVal: '0'

  },
  {
    name: 'Computers',
    pointVal: '0'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/happyThings', function(req, res) {
  console.log("In happy things api");
  res.send(happyThings);
});

router.post('/happyThings', function(req, res) {
  console.log("In happy post");
  console.log(req.body);
  happyThings.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});


module.exports = router;
