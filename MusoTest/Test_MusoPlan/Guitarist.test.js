const {Musician}=require('./Musician.js');
const {Guitarist}=require('./Guitarist.js');

//test Guitarist for displayDetails 

test('Testing Guitarist displayDetails',()=>{
   

    musician=new Guitarist();
    musician.musname='Linda';
    musician.guitarist='Guitarist';
  

    expect(musician.displayDetails()).toMatch('Linda is a guitarist. The more strings you have, the better you are.');
    
})