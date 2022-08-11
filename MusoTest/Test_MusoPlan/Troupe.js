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
            throw new Error ('Invalid Troupe Name (Name should be between 3 and 30 charactesr)');
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
            throw new Error ('Invalid genre. Please enter pop/jazz/rock');
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
         throw new Error('Enter number of hours between 0.5 and 3')
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
        var troupeDetails = ('Name of the troupe: '+ this.troupe_name +'; '+ ' Genre: ' + this.trgenre +'; ' + ' Minimum duration: ' +this.minduration +'.');
        
        for (let l=0; l<this.musinTroupe.length; l++) {
            troupeDetails+=' Musician name is: '+ this.musinTroupe[l].musName  +'; '+ ' Years of playing: ' + this.musinTroupe[l].yearsPlaying +'; '+ ' Hourly rate: ' + this.musinTroupe[l].hourlyRate;
        }
    return troupeDetails;
       
    }

    

}
    
module.exports={Troupe};