const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const employee = () => {
    inquirer.prompt([
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
    .then(({name, role, email, id}) => {
        let info ='';
        switch (role) {
            case 'manager':
                info = 'Office Number';
                break;
            case 'engineer':
                info = 'Git Hub Username';
                break;
            case 'intern':
                info = 'Current Shool';
                break;
        }
        inquirer.prompt([
            {
                type: 'input',
                name: 'uniqueInfo',
                message: `What is your ${info}`
            },
            {
                type: 'list',
                name: 'done',
                message: 'Do you want to add more cards?',
                choices: ['Yes','No']
            }
        ])
        .then(({uniqueInfo,done}) => {
            let newEmployee = '';
            switch(role){
                case 'manager':
                    newEmployee = new Manager(name, id, email, uniqueInfo);
                    addEmployee(newEmployee);
                    break;
                case 'engineer':
                    newEmployee = new Engineer(name, id, email, uniqueInfo);
                    addEmployee(newEmployee);
                    break;
                case 'intern':
                    newEmployee = new Intern(name, id, email, uniqueInfo);
                    addEmployee(newEmployee);
                    break;
            }
            switch(done) {
                case 'Yes':
                    employee();
                    break;
                case 'No':
                    console.log('Input finish html function here');
            }
        })

    })
}



const addEmployee = (user) => {
    return new Promise ((resolve, reject)=>{
        const name = user.getName();
        const role = user.getRole();
        const email = user.getEmail();
        const id = user.getId();

        let card ='';
        switch(role){
            case 'engineer':
                const git = user.getGit();
                card = `<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
                <div class="card-header text-white">
                    ${name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Developer <i class="fas fa-code"></i></li>
                    <li class="list-group-item">id: ${id}</li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${git}">${git}</a></li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                </ul>
            </div>`
                break;

            case 'intern':
                const school = user.getSchool();
                card = `<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
    <div class="card-header text-white">
        ${name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Intern <i class="fas fa-graduation-cap"></i></li>
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">School: ${school}</a></li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
    </ul>
</div>`;
                break;
            
            case 'manager':
                const office = user.getOffice();
                card = `<div class="card bg-danger" style="width: 18rem; margin-top: 2em;">
                <div class="card-header text-white">
                    ${name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Manager <i class="fas fa-glasses"></i></li>
                    <li class="list-group-item">id: ${id}</li>
                    <li class="list-group-item"> Office number: ${office}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                </ul>
            </div>`;
                break;

        }
        fs.appendFile('./src/index.html',card,(err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve;
            }
        });
    })
} 

employee();




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




