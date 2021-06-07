const Employee = require('../lib/employee');

describe('Employee', ()=> {
    it('Can create an instance of the Employee class', ()=> {
        const x = new Employee();
        expect(typeof(x)).toBe('object');
    })

    it('Can set name in new instance of employee class', () => {
        const name = 'Dmitriy';
        const x = new Employee(name);
        expect(x.name).toBe(name);
    })

    it('Can set name in new instance of employee class', ()=>{
        const testId = 10;
        const x = new Employee('name', testId);
        expect(x.id).toBe(testId);
    })

    it('Can set email in the new instance of employee class', ()=>{
        const email = 'test@rmail.com';
        const x = new Employee('name', 1, email);
        expect(x.email).toBe(email);
    })
})

describe('getName', ()=> {
    it('Can get name by using getName();', ()=>{
        const name = 'Dmitriy';
        const x = new Employee(name);
        expect(x.getName()).toBe(name);
    })
})

describe('getId', ()=> {
    it('Can get id by using getId();', ()=>{
        const id = 1;
        const x = new Employee('name', id);
        expect(x.getId()).toBe(id);
    })
})

describe('getEmail', ()=> {
    it('Can get email by using getEmail();', ()=>{
        const email = 'test@mail.com';
        const x = new Employee('name', 1, email);
        expect(x.getEmail()).toBe(email);
    })
})

describe('getRole', ()=> {
    it('Can get role by using getRole();', ()=>{
        const x = new Employee();
        expect(x.getRole()).toBe('Employee');
    })
})

