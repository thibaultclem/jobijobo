# jobijobo

### Configuration
- **Platform:** node
- **Framework**: express
- **Template Engine**: handlebars
- **CSS Framework**: bootstrap
- **CSS Preprocessor**: less
- **JavaScript Framework**: react
- **Build Tool**: gulp
- **Unit Testing**: mocha
- **Database**: mongodb
- **Authentication**: email,facebook,google,twitter
- **Deployment**: heroku

### Dev

#### Configuration
Create a `.env` file at the root of the jobijobo project and copy paste the following information:
```
# Basic Configuration
APP_ENV:'dev'
APP_PORT:3000
APP_HOST='http://localhost:3000'

#Dev database
MONGODB='localhost'

MAILGUN_USERNAME='ADD_YOUR'
MAILGUN_PASSWORD='ADD_YOUR'

LOG_FORMAT='dev'

# You can change the token secret
TOKEN_SECRET='zTb0X5m7k54mJOuq6UB25273s1uSel4r'

FACEBOOK_APP_ID='ADD_YOUR'
FACEBOOK_SECRET='ADD_YOUR'

GOOGLE_CLIENT_ID='ADD_YOUR'
GOOGLE_SECRET='ADD_YOUR'

TWITTER_KEY='ADD_YOUR'
TWITTER_SECRET='ADD_YOUR'
```
If you don't need to test OAuth and Forget Password, you don't need to update it

#### Install
```
# Update Homebrew's package database
$ brew update

# Install MongoDB
$ brew install mongodb

# Create the data directory
$ sudo mkdir -p /data/db

# Set permissions for the data directory
$ sudo chown -R `whoami` /data/db

# Install NPM dependencies
$ npm install

# Install gulp
$ npm install --global gulp-cli
```

#### Run
```
# Run MongoDB Server
$ mongod

# Open another shell and start gulp
$ gulp

# Open another shell and start the app
$ npm start

#jobijobo listening on port 3000
```


### TODO (not in priority order)
. Add Coach Jobi notification to help user interact with the app and help them in their job search
. Add gamification badges on the activity screen
. Add activity statistics charts on the activity screen
. Add Contact and Document section in the search detail
. Add a parser mechanism to easily extract information from the job search portal (pole emploi, linkedin. Glassdoor, indeed, ...)
. Add reminders notification (email, sms)
. Add smart filter/sorter to easily find the job application you are looking for in the dashboard
. Add more languages
. Add Linkedin Authentication

### License
Copyright (c) 2016 Thibault Clement
