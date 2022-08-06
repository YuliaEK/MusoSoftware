const {Musician} = require ('./Musician.js')

class Troupe {

    musinTroupe = new Array();
    
    set troupeName(tname)
    {
        if(tname.length>=3 && tname.length<=30)
        {
        this.troupe_name=tname;
        }
        else
        {
            console.log('Invalid Troupe Name');
        }
    }
    get troupeName()
    {
        return this.troupe_name;
    }

    set genre(tgenre)
    {
        if (tgenre == 'rock' || tgenre == 'pop' || tgenre == 'jazz')
        {
            this.trgenre=tgenre;
        }
        else 
        {
            console.log ('Invalid genre');
        }
    }
    get genre()
    {
    return this.trgenre;
    }
    set minDuration (mDuration)
    {
        if (mDuration>=0.5 && mDuration<=3)
        {
            this.minduration=mDuration;
        }
        else
        {
         console.log ('Enter number of hours between 0.5 and 3')
        }
    }
    get minDuration()
    {
        return this.minduration;
    }

    // Add musicians to troupe
    addMusician(musician){
        this.musinTroupe.push(musician);  
    }

    // Print troupe details
    
    troupeDetails(){
        console.log("=============");
        console.log ('Name of the troupe: '+ this.troupe_name +' ; '+ ' Genre: ' + this.trgenre +' ; ' + ' Minimum duration: ' +this.minduration);
        for (let l=0; l<this.musinTroupe.length; l++) {
            console.log('Musician name is: '+ this.musinTroupe[l].musName  +' ; '+ ' Years of playing: ' + this.musinTroupe[l].yearsPlaying +' ; '+ ' Hourly rate: ' + this.musinTroupe[l].hourlyRate);
        }
       
    }

}
    
module.exports={Troupe};