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
    .then((position) => {
        switch (position.position) {
            case 'manager':
                managerCard();
                break;
            case 'developer':
                developerCard();
                break;
            case 'intern':
                internCard();
                break;
        }
    })
}

const managerCard = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Id number: '
        },
        {
            type: 'input',
            name: 'office',
            message: 'Office number: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ])
    .then((answers) => {
       console.log(answers); // calls a write that will write the answers and populate the html doc
    })
};

const developerCard = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Id number: '
        },
        {
            type: 'input',
            name: 'git',
            message: 'GitHub username: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ])
    .then((answers) => {
       console.log(answers); // calls a write that will write the answers and populate the html doc
    })
};

const internCard = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Id number: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are you currently enrolled in? '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ])
    .then((answers) => {
       console.log(answers); // calls a write that will write the answers and populate the html doc
    })
}



questions();