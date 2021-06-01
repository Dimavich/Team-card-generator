const fs = require('fs');
const inquirer = require('inquirer');


const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Choose your position',
            choices: ['manager', 'developer', 'intern']
        }
    ])
    .then((answer) => {
        switch (answer.position) {
            case 'manager':
                console.log(' person chose manager');
                break;
            case 'developer':
                console.log('developer');
                break;
            case 'intern':
                console.log('intern');
                break;
        }
    })
}

questions();