var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', path.join( path.dirname() + '/views'));
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false}));

require('babel/register')({
  ignore: false
});

app.use('/', function(req, res) {
  res.render('index', '');
});

app.listen(app.get('port'), function() {});
