var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


router.get('/exhibition', function(req, res, next) {
	res.render('exhib', { title: '展览' });
});

router.get('/message', function(req, res, next) {
	res.render('message',  { title: '策展人的话' });
});

router.get('/comment', function(req, res, next) {
	res.render('comment', { title: '访客互动' });
});

router.get('/float', function(req, res, next) {
	res.render('float', { title: '浮动的汉字' });
});


module.exports = router;
