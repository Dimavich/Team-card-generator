const Manager = require('../lib/manager');

describe('getOffice', ()=> {
    it('Can get office number from new instance of the Manager class', ()=>{
        const office = 1;
        const x = new Manager('name',1,'test@mail.com', office);
        expect(x.getOffice()).toBe(office);
    })
})

describe('getRole', ()=> {
    it('Can get role by using getRole();', ()=>{
        const x = new Manager();
        expect(x.getRole()).toBe('manager');
    })
})