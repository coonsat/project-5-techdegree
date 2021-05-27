const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
const myDeets = require('../public/js/mydeets');

//Set up home route
router.get('/', (request, response) => {
    //This information is only shown once so need to to put it in mydeets.
    const header = 'This is what I get up to';
    const portfolio = 'This portfolio page is meant to showcase my development into becoming a javascript developer. Having experience with Java, I always dabbled around with Javascript but understood that it is fundamentally different. Moreover, the applications these days are becoming more vast than 5 years ago. So, welcome to my small corner of the internet.';
    
    //package information for pug
    const me = { myDeets, header, portfolio, projects };
    response.render('index', me);
});

module.exports = router;