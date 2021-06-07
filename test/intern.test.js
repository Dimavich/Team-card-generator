const Intern = require('../lib/intern');

describe('getRole', ()=> {
    it('Can get role by using getRole();', ()=>{
        const x = new Intern();
        expect(x.getRole()).toBe('Intern');
    })
})

describe('school', ()=> {
    it('Can get school from new instance of Intern class', ()=>{
        const testSchool = 'UC Davis'
        const x = new Intern('name',1,'test@mail.com', testSchool);
        expect(x.school).toBe(testSchool);
    })
})

describe('getSchool', ()=> {
    it('Can get school by using getSchool();', ()=>{
        const testSchool = 'UC Davis'
        const x = new Intern('name',1,'test@mail.com', testSchool);
        expect(x.getSchool()).toBe(testSchool);
    })
})