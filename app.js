// const https = require('https');
// const http = require('http');
const express = require('express');
const appRouter = express.Router();
const bodyParser = require('body-parser');
const myDeets = require('./public/js/mydeets');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

//import projects data
const data = require('./data.json');
const { projects } = data;

//configure what the express instance should use
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
app.use('/static', express.static('public')); //set the static assets

//set view engine
app.set('view engine', 'pug');

//set the routes to be used
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

//use the routes
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

//set up middleware to catch and render an error page if the user enters an invalid route
app.use((request, response, next) => {
    const error = new Error('The path you are looking for does not exist');
    error.status = 404;
    // const profilePic = myDeets.;
    const cryingBaby = 'cryingBaby.png';
    const errorInfo = { error, cryingBaby, myDeets };
    response.render('page-not-found', errorInfo)
    console.log(chalk.red(`Error: Request ${request.originalUrl} could not be fulfilled`))
    next();
});

//bind app to port and display console message
app.listen(3000, () => {
    console.log(`The application is now running on port ${PORT}`);
});