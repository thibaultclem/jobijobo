var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var Provider = require('react-redux').Provider;
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');

// Load environment variables from .env file
dotenv.load();

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// Models
var User = require('./models/user');
var Note = require('./models/note');
var Status = require('./models/status');
var Job = require('./models/job');

// Controllers (Express routes handler)
var UserController = require('./controllers/user');
var ContactController = require('./controllers/contact');
var JobController = require('./controllers/job');
var I18nController = require('./controllers/i18n');


// React and Server-Side Rendering
var routes = require('./app/routes');
var configureStore = require('./app/store/configureStore').default;

var app = express();


mongoose.connect(process.env.MONGODB);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  req.isAuthenticated = function() {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };
  //If user is authenticated add the user to the payload
  if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();
    User.findById(payload.sub, function(err, user) {
      req.user = user;
      next();
    });
  } else {
    next();
  }
});

// API
app.use('/api/v1/jobs', UserController.ensureAuthenticated, JobController);
app.use('/api/v1/i18n', UserController.ensureAuthenticated, I18nController);

//TODO clean and move parts to controllers
app.post('/contact', ContactController.contactPost);
app.put('/account', UserController.ensureAuthenticated, UserController.accountPut);
app.delete('/account', UserController.ensureAuthenticated, UserController.accountDelete);
app.post('/signup', UserController.signupPost);
app.post('/login', UserController.loginPost);
app.post('/forgot', UserController.forgotPost);
app.post('/reset/:token', UserController.resetPost);
app.get('/unlink/:provider', UserController.ensureAuthenticated, UserController.unlink);
app.post('/auth/facebook', UserController.authFacebook);
app.get('/auth/facebook/callback', UserController.authFacebookCallback);
app.post('/auth/google', UserController.authGoogle);
app.get('/auth/google/callback', UserController.authGoogleCallback);
app.post('/auth/twitter', UserController.authTwitter);
app.get('/auth/twitter/callback', UserController.authTwitterCallback);

//Applications languages
var lang_en = require('./i18n/en.json');
var lang_fr = require('./i18n/fr.json');

// React server rendering
app.use(function(req, res) {

  //get locale
  switch (req.acceptsLanguages( 'en-US', 'en', 'fr' )) {
    case 'fr':
      var lang = 'fr';
      var labels = lang_fr;
      break;
    default:
      var lang = 'en';
      var labels = lang_en;
   }

   //Init store
  var initialState = {
    auth: { token: req.cookies.token, user: req.user },
    messages: {},
    jobs: [],
    i18n: { language: lang, labels: labels }
  };

  var store = configureStore(initialState);

  Router.match({ routes: routes.default(store), location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Provider, { store: store },
        React.createElement(Router.RouterContext, renderProps)
      ));
      res.render('layouts/main', {
        html: html,
        initialState: store.getState()
      });
    } else {
      res.sendStatus(404);
    }
  });
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
