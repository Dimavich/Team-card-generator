const Engineer = require('../lib/engineer');

describe('getGit', ()=> {
    it('Can get git hub username by using getGit();', ()=>{
        const git = 'Dimavich';
        const x = new Engineer('name',1,'test@mail.com', git);
        expect(x.getGit()).toBe(git);
    })
})

describe('git', ()=> {
    it('Can get git hub username from new instance of engineer class', ()=>{
        const github = 'Dimavich';
        const x = new Engineer('name',1,'test@mail.com', github);
        expect(x.git).toBe(github);
    })
})

describe('getRole', ()=> {
    it('Can get role by using getRole();', ()=>{
        const x = new Engineer();
        expect(x.getRole()).toBe('engineer');
    })
})

