
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
            console.log('Invalid Musician Name (Name should be between 3 and 30 charactesr');
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
            console.log('Years playing must be non-negative');
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
            console.log('Hourly rate must be over 50');
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
            console.log('Type a correct musician');
        }
    }

    get instrument()
    {
        return this.instrum;
    }
musicianDetails(){
        console.log ('My name is '+ this.musName+' and I am a ' + this.instrument +'.');

        let mytype = this.instrument
        if (mytype == 'Guitarist')
        {
            console.log ('The interesting fact about me: The more strings you have, the better you are.9');
        }
        else if (mytype == 'Bassist')
        {
            console.log ('The interesting fact 6about me: Everyone loves a bassist.');
        }
        else if (mytype == 'Percussionist')
        {
            console.log ('The interesting fact about me: Me drum.');
        }
        else if (mytype == 'Flautist')
        {
            console.log ('The interesting fact about me: 1989 heavy metal instrument of the year.');
        }
        else
        {
            console.log ('Type a correct musician')
        }
        
        console.log('===============');
    }

}

 
module.exports={Musician};
