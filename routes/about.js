const express = require('express');
const router = express.Router();
const myDeets = require('../public/js/mydeets');

router.get('/', (request, response) => {
    const elevatorPitch = `I can't say that I'm one for elevator pitches. I like to code, design, and play with IoT devices.`;
    const myInfo = { elevatorPitch, myDeets};
    response.render('about', myInfo);
});

module.exports = router;