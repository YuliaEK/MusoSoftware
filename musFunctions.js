const ps=require('prompt-sync');
const prompt=ps();
const fs = require ('fs');

const {Musician}=require('./Musician.js');
const {Guitarist}=require('./Guitarist.js');
const {Bassist}=require('./Bassist.js');
const {Flautist}=require('./Flautist.js');
const {Percussionist}=require('./Percussionist.js');
const {Troupe}=require('./Troupe.js');


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


function getMusicianList(){
    return musicianDetails;
}


// Create a new troupe
function createTroupe () {

    let trName="";
    let trGenre="";
    let minimumDur=0;
    
    while (true)
{
   
       if(trName.length>=3 && trName.length<=30)
       {
           if (trGenre == 'rock' || trGenre == 'pop' || trGenre == 'jazz')
           {
               if(minimumDur>=0.5 && minimumDur<=3)
               {
                   break;
               }
               else
               {
                minimumDur=prompt ('Enter minimum duration (between 0.5 and 3):');
                  }
           }
           else
           {
            trGenre=prompt ('Enter genre (rock, pop, jazz):')
            
           }
       }
       else
       {
           trName=prompt('Enter a troupe name (3 to 30 characters):');
       }
      
   }

    const tr1 = new Troupe();
    tr1.troupeName=trName;
    tr1.genre=trGenre;
    tr1.minDuration=minimumDur;

    troupeDetails.push(tr1);
}


function getTroupeList(){
    return troupeDetails;
}

// add Musician to a troupe
function addMusiciantoTroupe()
{
    let tName=prompt('Enter Troupe Name : ');
    let mName=prompt('Enter Musician Name : ');

    let musician="";

    for(let x=0;x<musicianDetails.length;x++)
    {
        if(musicianDetails[x].musName==mName)
        {
            musician=musicianDetails[x];
        }
    }
    for(let i=0;i<troupeDetails.length;i++)
    {
        if(troupeDetails[i].troupeName==tName)
        {
            troupeDetails[i].addMusician(musician);
        }

        if(troupeDetails[i].musinTroupe.length >= 5)
        {
            console.log ('Troupe musicians limit has been reached');
    
            break;
        }
    
  

    }
    
}

// Calculate cost

function calCost(){

    // Create a new array and loop through it to print a troupe name



    let troupeName = troupeDetails.map ((a) => a.troupeName);
    for (let i = 0; i < troupeDetails.length; i++){
        console.log(`${troupeName[i]}`)


    var troupe = prompt ('Enter your troupe name:');
    var hireH = Number (prompt ('Enter number of hours you would like to hire a troupe:'));
    
    for (let i = 0; i < troupeDetails.length; i++){
        if (troupe = troupeDetails[i].troupeName && hireH <= troupeDetails[i].minDuration)
        {
            let musHours = troupeDetails[i].musinTroupe.map((a) => a.hourlyRate);
            //console.log (musHours);
            const sum = musHours.reduce((acc, value) => {return Number(acc)+Number(value)});
            console.log('The total cost is:'+sum*hireH);
            
        }
        else 
        {
            console.log ('Minimum duration for this troup is:'+ troupeDetails[i].minDuration + ' Please enter hours between 0.5 and 3:');
        }
     }
   
        
        }
    }

    function ReadList(){

        const info = fs.readFileSync('mylist.txt', 'utf-8');
        const contentfile = info.split('\n');
        console.log (contentfile);
        return contentfile;
       //console.log (info);

   
    }