const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');
const chalk = require('chalk');
const myDeets = require('../public/js/mydeets');

//router to render page with specific project details 
router.get('/:id', (request, response) => {
    const { id } = request.params;
    const project = projects.find(project => project.id === parseInt(id));

    if (typeof project === 'undefined') {
        //construct error and set status - resource known but data doesn't exist
        const error = new Error('The project you entered does not exist');
        error.status = 400;

        //differentiate error message with red text. Send image and package info for pug
        console.log(chalk.red(`/project/${id} not found`));
        const cryingBaby = 'cryingBaby.png';
        const errorInfo = { error, cryingBaby, myDeets };

        //return render so that the process ends here. 
        return response.render('error', errorInfo);

    } else {

        //Package information for pug
        const myInfo = { project, myDeets };
        return response.render('project', myInfo);
    }

});

module.exports = router;