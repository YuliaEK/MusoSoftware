const {Musician}=require('./Musician.js');
const {Flautist}=require('./Flautist.js');

//test Flautist for displayDetails 
6
test('Testing Flautist displayDetails',()=>{
   

    musician=new Flautist();
    musician.musname='Tim';
    musician.flautist='Flautist';
  

    expect(musician.displayDetails()).toMatch('Tim is a flautist. 1989 heavy metal instrument of the year');
    
})