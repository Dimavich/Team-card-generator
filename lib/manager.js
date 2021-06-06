const Employee = require ('./employee');


class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
        super (name,id,email);
        this.officeNumber = officeNumber;
    }

    getRoll() {
        return 'Manager';
    }

    getOffice() {
        return this.officeNumber;
    }

}

module.exports = Manager;