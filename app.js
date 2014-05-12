var express = require('express');
var router = express.Router();
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use('/public_assets/js', express.static(__dirname + '/public_assets/js'));
app.use('/public_assets/css', express.static(__dirname + '/public_assets/css'));

router.get('/', function( req, res ) {
	res.render('index', { title: 'Index' });
});

app.use(router);
app.listen(process.env.PORT || 8080);
console.log('Server started...');