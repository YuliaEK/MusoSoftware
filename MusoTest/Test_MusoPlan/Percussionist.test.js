const {Musician}=require('./Musician.js');
const {Percussionist}=require('./Percussionist.js');

//test Percussionist for displayDetails 

test('Testing Percussionist displayDetails',()=>{
    musician=new Percussionist();
    musician.musname='Liam';
    musician.percussionist='Percussionist';
  
    expect(musician.displayDetails()).toMatch('Liam is a percussionist. Me drum.');
    
})