var dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.load();

var config = module.exports = {};

// App configuration
config.env = process.env.APP_ENV;
config.port = process.env.APP_PORT;
config.host = process.env.APP_HOST;
config.logFormat = process.env.LOG_FORMAT

// DB Configuration
config.mongodb = {
  host: process.env.MONGODB
}

// Mail Configuration
config.mail = {
  username: process.env.MAILGUN_USERNAME,
  password: process.env.MAILGUN_PASSWORD
}

// OAuth configuration
config.auth = {
  facebookAppId : process.env.FACEBOOK_APP_ID,
  facebookSecret : process.env.FACEBOOK_SECRET,
  googleClientId : process.env.GOOGLE_CLIENT_ID,
  googleSecret : process.env.GOOGLE_SECRET,
  twitterKey : process.env.TWITTER_KEY,
  twitterSecret : process.env.TWITTER_SECRET,
};
