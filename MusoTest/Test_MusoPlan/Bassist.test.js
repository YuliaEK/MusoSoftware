const {Musician}=require('./Musician.js');
const {Bassist}=require('./Bassist.js');

//test Bassist for displayDetails 

test('Testing Bassisst displayDetails',()=>{
   

    musician=new Bassist();
    musician.musname='Kate';
    musician.bassist='Bassist';
  

    expect(musician.displayDetails()).toMatch('Kate is a bassist. Everyone loves a bassist.');
    
})