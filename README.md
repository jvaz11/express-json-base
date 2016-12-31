# express-json-base

A barebones server using [Express 4](http://expressjs.com/). A fork of [node-js-sample](https://github.com/heroku/node-js-sample). Use this to create a simple server to respond to HTTP requests (from webhooks or any other source) with JSON.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
cd my-projects # cd into the directory you want to create the server in
git clone https://github.com/jvaz11/express-json-base.git
mv express-json-base my-project-name # [optional] rename your project from express-json-base to whatever you want 
cd my-project-name # cd into your project
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
heroku create my-project-name # replace "my-project-name" with whatever you want
git push heroku master
heroku open # your app will open in a new browser window
```
