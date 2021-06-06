const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const employee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your job Title?',
            choices: ['manager', 'engineer', 'intern']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?'
        }
    ])
    .then(({name, role, id, email}) => {
        const role ='';
        switch (position.position) {
            case 'manager':
                role = 'Office Number';
                break;
            case 'engineer':
                role = 'Git Hub Username';
                break;
            case 'intern':
                role = 'Current Shool';
                break;
        }
        inquirer.prompt([
            {
                type: 'input',
                name: 'uniqueInfo',
                message: `What is your ${role}`
            },
            {
                type: 'list',
                name: 'done',
                message: 'Do you want to add more cards?',
                choices: ['Yes','No']
            }
        ])
        .then(({uniqueInfo,done}) => {
            const newEmployee = '';
            switch(role){
                case 'manager':
                    newEmployee = new Manager(name, id, email, uniqueInfo);
                    break;
                case 'engineer':
                    newEmployee = new Engineer(name, id, email, uniqueInfo);
                    break;
                case 'intern':
                    newEmployee = new Intern(name, id, email, uniqueInfo);
                    break;
            }
        })

    })
}






// const position = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'position',
//             message: 'Choose your position',
//             choices: ['manager', 'developer', 'intern']
//         }
//     ])
//     .then((position) => {
//         switch (position.position) {
//             case 'manager':
//                 managerCard();
//                 break;
//             case 'developer':
//                 developerCard();
//                 break;
//             case 'intern':
//                 internCard();
//                 break;
//         }
//     })
// }

// const managerCard = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Id number: '
//         },
//         {
//             type: 'input',
//             name: 'office',
//             message: 'Office number: '
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         },
//     ])
//     .then((answers) => {
//             fs.appendFile('./web/empty.html',`<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
//             <div class="card-header text-white">
//                 ${answers.name}
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Manager <i class="fas fa-glasses"></i></li>
//                 <li class="list-group-item">id: ${answers.id}</li>
//                 <li class="list-group-item"> Office number: ${answers.office}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
//             </ul>
//         </div>`,
//         (err) =>
//         err ? console.error(err) : console.log('Success!'));
//     })

// };

// const developerCard = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Id number: '
//         },
//         {
//             type: 'input',
//             name: 'git',
//             message: 'GitHub username: '
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         },
//     ])
//     .then((answers) => {
//         fs.appendFile('./web/empty.html',`<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
//         <div class="card-header text-white">
//             ${answers.name}
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Developer <i class="fas fa-code"></i></li>
//             <li class="list-group-item">id: ${answers.id}</li>
//             <li class="list-group-item">GitHub: <a href="https://github.com/${answers.git}">${answers.git}</a></li>
//             <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
//         </ul>
//     </div>`,
//     (err) =>
//     err ? console.error(err) : console.log('Success!'));
//     })
// };

// const internCard = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Id number: '
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What school are you currently enrolled in? '
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         },
//     ])
//     .then((answers) => {
//         fs.appendFile('./web/empty.html',`<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
//         <div class="card-header text-white">
//             ${answers.name}
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Intern <i class="fas fa-graduation-cap"></i></li>
//             <li class="list-group-item">id: ${answers.id}</li>
//             <li class="list-group-item">School: ${answers.school}</a></li>
//             <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
//         </ul>
//     </div>`,
//     (err) =>
//     err ? console.error(err) : console.log('Success!'));
//     })
// }





position();

