const {Troupe}=require('./Troupe.js');
const {Musician}=require('./Musician.js');

//test for Troupe  Name

test('Test Troupe Name for more than 3 character value',()=>{
    troupe = new Troupe();
    troupe.troupeName='Best Band';// setting the value
    expect(troupe.troupeName).toEqual('Best Band');
})

test('Test Troupe Name with less than 3 characters',()=>{
    expect(() => {
    troupe = new Troupe();
    troupe.troupeName='BB';// setting the value
      }).toThrowError('Invalid Troupe Name (Name should be between 3 and 30 charactesr)');    
})

test('Test Troupe Name with more than 30 characters',()=>{
    expect(() => {
    troupe= new Troupe();
    troupe.troupeName='JackLimRickKateLeylaPeterVictoria';// setting the value
      }).toThrowError('Invalid Troupe Name (Name should be between 3 and 30 charactesr');    
})

//test for Troupe Genre

test('Test Troupe Genre that exist',()=>{
    troupe = new Troupe();
    troupe.genre='pop';// setting the value
    expect(troupe.genre).toEqual('pop');
})

test('Test Troupe Genre that doesn`t exist',()=>{
    expect(() => {
    troupe = new Troupe();
    troupe.genre='hip-hop';// setting the value
      }).toThrowError('Invalid genre. Please enter pop/jazz/rock');
    })

//test for Troupe minimum duartion

test('Test Troupe minimum duration more than 0.5 and less than 3',()=>{
    troupe = new Troupe();
    troupe.minDuration=2;// setting the value
    expect(troupe.minDuration).toEqual(2);
})

test('Test Troupe minimum duration equail to 0.5',()=>{
    troupe = new Troupe();
    troupe.minDuration=0.5;// setting the value
    expect(troupe.minDuration).toEqual(0.5);
})

test('Test Troupe minimum duration equal to 3',()=>{
    troupe = new Troupe();
    troupe.minDuration=3;// setting the value
    expect(troupe.minDuration).toEqual(3);
})

test('Troupe minimum duration less than 0.5',()=>{
    expect(() => {
    troupe = new Troupe();
    troupe.minDuration=0.3;// setting the value
      }).toThrowError('Enter number of hours between 0.5 and 3');
    })

 test('Troupe minimum duration more than 3',()=>{
    expect(() => {
    troupe = new Troupe();
    troupe.minDuration=4;// setting the value
    }).toThrowError('Enter number of hours between 0.5 and 3');
    })

  // Test addMusician
test('Testing Troupe addMusician',()=>{
    troupe=new Troupe();
    troupe.troupeName='Best Band';

    expect(troupe.musinTroupe.length).toBe(0);
})

test('Testing Troupe addMusician',()=>{
    troupe=new Troupe();
    troupe.troupeName='Best Band';

    musician=new Musician();
    musician.musName='Henry';

    troupe.addMusician(musician);
    expect(troupe.musinTroupe.length).toBe(1);
})
test('Testing Troupe add 2 to addMusician',()=>{
    troupe=new Troupe();
    troupe.troupeName='Best Band';

    musician=new Musician();
    musician.musName='Henry';
    
    musician1=new Musician();
    musician1.musName='Kate';

    troupe.addMusician(musician);
    troupe.addMusician(musician1);
    expect(troupe.musinTroupe.length).toBe(2);
})

test('Testing Troupe add 2 to addMusician',()=>{
    troupe=new Troupe();
    troupe.troupeName='Best Band';

    musician=new Musician();
    musician.musName='Henry';
    
    musician1=new Musician();
    musician1.musName='Kate';

    troupe.addMusician(musician);
    troupe.addMusician(musician1);
    expect(troupe.musinTroupe.length).toBe(2);
})

test('Testing Troupe troupeDetails',()=>{
    troupe=new Troupe();
    troupe.troupeName='Best Band';
    troupe.genre='pop';
    troupe.minDuration='3';

    musician=new Musician();
    musician.musName='Tim';
    musician.yearsPlaying='3';
    musician.hourlyRate='60';

    troupe.addMusician(musician);

    expect(troupe.troupeDetails()).toMatch('Name of the troupe: Best Band' +'; ' + ' Genre: pop'+'; ' + ' Minimum duration: 3' +'.' +' Musician name is: Tim'+'; '+ ' Years of playing: 3' +'; '+ ' Hourly rate: 60');
    
})