var express = require('express');
var route = express.Router();
router.get('/', function(req,res){
	res.send('GET route on customer.');
});
router.post('/', function(req,res){
	res.send('POST route on customer.');
});
module.exports = router;