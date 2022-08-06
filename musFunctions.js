const ps=require('prompt-sync');
const prompt=ps();
const fs = require ('fs');

const {Musician}=require('./Musician.js');
const {Guitarist}=require('./Guitarist.js');
const {Bassist}=require('./Bassist.js');
const {Flautist}=require('./Flautist.js');
const {Percussionist}=require('./Percussionist.js');
const {Troupe}=require('./Troupe.js');
const { get } = require('https');

var musicianDetails = new Array();
var troupeDetails = new Array();




// Create a new musician

function createMusician (){
   

    let musicianName= "";
    let yPlay=0;
    let hourlyR=0;
    let instrument;

    instrument = prompt ('Enter instrumentalist (Guitarist/Bassist/Flautist/Percussionist):')
    while (true)
{
   if (instrument == "Guitarist" || instrument == "Bassist" || instrument == "Percussionist" || instrument == "Flautist")
   {
    
       if(musicianName.length>=3 && musicianName.length<=30)
       {
           if (yPlay>0)
           {
               if(hourlyR>=50)
               {
                   break;
               }
               else
               {
           hourlyR=prompt ('Enter hourly rate (greater than 50):');
               }
           }
           else
           {
            yPlay=prompt ('Enter years (Years playing must be non-negative):');
           }
       }
       else
       {
           musicianName=prompt('Enter a musician name (3 to 30 characters):');
       }
   }
   else 
   {
       console.log("Enter a correct musician");
   }
}
if (instrument=='Guitarist')
    {
        const guitar =new Guitarist();
        guitar.musName=musicianName;
        guitar.yearsPlaying=yPlay;
        guitar.hourlyRate=hourlyR;
        guitar.instrument=instrument;
        let guitaristInfo='My name is: '+musicianName+ ' and I am a guitarist. The more strings you have, the better you are.'
        console.log(guitaristInfo);
        musicianDetails.push(guitar);
        console.log(musicianDetails);
    }
    else if(instrument=='Bassist')
    {
        const bassist= new Bassist();
        bassist.musName=musicianName;
        bassist.yearsPlaying=yPlay;
        bassist.hourlyRate=hourlyR;
        bassist.instrument=instrument;
        let bassistInfo='My name is '+musicianName+' and I am a bassist. Everyone loves a bassist.'
        console.log(bassistInfo);
        musicianDetails.push(bassist);
        console.log(musicianDetails);
    }
    else if(instrument=='Percussionist'){
        const percussionist= new Percussionist();
        percussionist.musName=musicianName;
        percussionist.yearsPlaying=yPlay;
        percussionist.hourlyRate=hourlyR;
        percussionist.instrument=instrument;
        let percInfo='My name is '+musicianName+' .I am a percussionist. Me drum.'
        console.log(percInfo);
        musicianDetails.push(percussionist);
        console.log(musicianDetails);
    }
    else if(instrument=='Flautist'){
        const flautist= new Flautist();
        flautist.musName=musicianName;
        flautist.yearsPlaying=yPlay;
        flautist.hourlyRate=hourlyR;
        flautist.instrument=instrument;
        let flautistInfo='My name is '+musicianName+'.I am a flautist. 1989 heavy metal instrument of the year.'
        console.log(flautistInfo);
        musicianDetails.push(flautist);
        console.log(musicianDetails);
    }
    else{
        console.log('Please choose correct musician')
    }
}



