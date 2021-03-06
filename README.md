# jobijobo.io

[jobijobo.io](https://jobijobo.io) is a new Job Management Application.
Our mission is to make your Job Search taking place under the best conditions.
We provide a central place to easily add, manage and organize all your job adverts.
![](https://jobijobo.io)

[jobijobo.io](https://jobijobo.io) is a community project.
We are looking for any developer, translator, you ? that would like to help us improve JobiJobo.io

### Stack
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

### TODO
See our Trello dashboard:
https://trello.com/b/1hOTUzKe/jobijobo-io


### License
Copyright (c) 2016 JobiJob
