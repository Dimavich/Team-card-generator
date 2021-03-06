const Employee = require ('./employee');


class Engineer extends Employee {
    constructor (name,id,email,git) {
        super (name,id,email);
        this.git = git;
    }

    getRole() {
        return 'engineer';
    }

    getGit() {
        return this.git;
    }

}

module.exports = Engineer;