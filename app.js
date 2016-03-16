/* Module dependencies */
var http = require('http'),
    path = require('path'),
    express = require('express'),
    handlebars = require('express-handlebars')
    

// Routes =====================================================
var index = require('./routes/index');

// Initialize express object ==================================
var app = express();

// Set port ===================================================
app.set('port', process.env.PORT || 7000);

// Set UI engine ==============================================
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


// Middleware =================================================
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));




// Routing =====================================================
app.get('/', index.view);

// localhost ===================================================
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

