
const ps=require('prompt-sync')
const prompt=ps()


class Musician{
   
    set musName(musname)
    {
        if(musname.length>=3 && musname.length<=30)
        {
        this.mus_name=musname;
        }
        else
        {
            throw new Error ('Invalid Musician Name (Name should be between 3 and 30 charactesr');
        }
    }
    get musName(){
        return this.mus_name;
    }
    set yearsPlaying(yearspl)
    {
        if(yearspl>0)
        {
        this.years_pl=yearspl;
        }
        else
        {
            throw new Error ('Years playing must be non-negative');
        }
    }
    get yearsPlaying()
    {
        return this.years_pl;
    }
    set hourlyRate(hrate)
    {
        if(hrate>=50)
        {
            this.hourly_rate=hrate;
        }
    
        else
        {
            throw new Error ('Hourly rate must be over 50');
        }
    }

    get hourlyRate()
    {
        return this.hourly_rate;
    }

    set instrument (inst)
    {
        if (inst == 'Guitarist' || inst == 'Bassist' || inst == 'Percussionist' || inst == 'Flautist'  )
        {
        this.instrum=inst;
        }
        else
        {
            throw new Error ('Type a correct musician');
        }
    }

    get instrument()
    {
        return this.instrum;
    }
musicianDetails(){
      
    
        let mytype = this.instrument
        let musdetails = ('My name is '+ this.musName+' and I am a ' + this.instrument+'.')

        if (mytype == 'Guitarist')
        {
            return ( musdetails+' The interesting fact about me: The more strings you have, the better you are.');
        }
        else if (mytype == 'Bassist')
        {
            return (musdetails+' The interesting fact about me: Everyone loves a bassist.');
        }
        else if (mytype == 'Percussionist')
        {
            return  (musdetails+' The interesting fact about me: Me drum.');
        }
        else if (mytype == 'Flautist')
        {
            return  (musdetails+' The interesting fact about me: 1989 heavy metal instrument of the year.');
        }
        else
        {
           throw new Error ('Type a correct musician')
        }
        
        
    }
  
}

 
module.exports={Musician};