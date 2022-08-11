const ps=require('prompt-sync');
const prompt=ps();

const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js')
const {Guitarist}=require('./Guitarist.js');
const {Bassist}=require('./Bassist.js');
const {Flautist}=require('./Flautist.js');
const {Percussionist}=require('./Percussionist.js');
const musFunctions=require('./musFunctions.js');
var choice = 0;

while(true)
{
    if(choice==0){
        console.log('==================');
        console.log('Select your choice');
        console.log('\t1.Create a Musician\n\t2.Create a Troupe\n\t3.Add a musician to a troupe \n\t4.Provide a summary description of a troupe \n\t5.Provide a detailed description of a troupe\n\t6.Calculate cost of deploying troupe\n\t7.Read a list of troupe names from a text file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename \n\t9.Exit');
        choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9] : ');
    }

    else if(choice==1)
    {
        musFunctions.createMusician();
        choice = 0;
    }

    else if(choice==2)
    {
        musFunctions.createTroupe();
        choice = 0;
    }

    else if(choice==3)
    {
      
        console.log(musFunctions.getMusicianList());
        console.log(musFunctions.getTroupeList());
        musFunctions.addMusiciantoTroupe();
        choice=0;
    }
    
    else if(choice==4)
    {
        var arrTroupeList = musFunctions.getTroupeList();

        for(var i = 0 ; i < arrTroupeList.length ; i++){
            arrTroupeList[i].troupeDetails();
        }
    choice=0;
    }

    else if(choice==5)
    {
        var arrTroupeList = musFunctions.getTroupeList();
     
        for(var i = 0 ; i < arrTroupeList.length ; i++){
            arrTroupeList[i].troupeDetails();
        }
        
        var arrMusicianList = musFunctions.getMusicianList();
        for (var j = 0; j< arrMusicianList.length; j++){
            arrMusicianList[j].musicianDetails();
           
        }
    choice=0;
    }

    else if(choice==6)
    {
        musFunctions.calCost();
        choice = 0;
        }

        else if(choice==7)
    {
        //var file = prompt('Enter a file name:')

        musFunctions.ReadList();
        choice = 0;
        }

        else if(choice==8)
    {
        musFunctions.WriteList();
        choice = 0;
        }
   

    else if(choice==9)
    {
    break;
    }

    else 
    {
        console.log('==================');
        console.log('Select your choice');
        console.log('\t1.Create a Musician\n\t2.Create a Troupe\n\t3.Add a musician to a troupe \n\t4.Provide a summary description of a troupe \n\t5.Provide a detailed description of a troupe\n\t6.Calculate cost of deploying troupe\n\t7.Read a list of troupe names from a text file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename \n\t9.Exit');
        choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9] : ');
    }
    
    
}