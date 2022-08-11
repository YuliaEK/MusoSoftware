const {Musician}=require('./Musician.js');

//test for Musician  Name

test('Test Musician Name for more than 3 character value',()=>{
    musician = new Musician();
    musician.musName='Tim';// setting the value
    expect(musician.musName).toEqual('Tim');
})

test('Test Musician Name with less than 3 characters',()=>{
    expect(() => {
    musician = new Musician();
    musician.musName='JD';// setting the value
      }).toThrowError('Invalid Musician Name (Name should be between 3 and 30 charactesr');    
})

test('Test Musician Name with more than 30 characters',()=>{
    expect(() => {
    musician = new Musician();
    musician.musName='JackLimRickKateLeylaPeterVictoria';// setting the value
      }).toThrowError('Invalid Musician Name (Name should be between 3 and 30 charactesr');    
})

//test for years of playing  

test('Test years of playing for more than 0 value',()=>{
  musician = new Musician();
  musician.yearsPlaying='1';// setting the value
  expect(musician.yearsPlaying).toEqual('1');
})

test('Test years of playing for less than 0 value',()=>{
  expect(() => {
  musician = new Musician();
  musician.yearsPlaying='-1';// setting the value
    }).toThrowError('Years playing must be non-negative');    
})

test('Test years of playing equal to 0 value',()=>{
  expect(() => {
  musician = new Musician();
  musician.yearsPlaying='0';// setting the value
    }).toThrowError('Years playing must be non-negative');    
})

//test for Hourly Rate

test('Test Hourly Rate with more than 50',()=>{
  musician = new Musician();
  musician.hourlyRate='55';// setting the value
  expect(musician.hourlyRate).toEqual('55');
})

test('Test Hourly Rate with less than 50',()=>{
  expect(() => {
    musician = new Musician();
    musician.hourlyRate='45';// setting the value
    }).toThrowError('Hourly rate must be over 50');
  })

  test('Test Hourly Rate equal to 50',()=>{
    musician = new Musician();
    musician.hourlyRate='50';// setting the value
    expect(musician.hourlyRate).toEqual('50');
  })

  //test for the valid instrument

test('Test Instrumentalist with Guitarist',()=>{
  musician = new Musician();
  musician.instrument='Guitarist';// setting the value
  expect(musician.instrument).toEqual('Guitarist');
})

test('Test Instrumentalist with Bassist',()=>{
  musician = new Musician();
  musician.instrument='Bassist';// setting the value
  expect(musician.instrument).toEqual('Bassist');
})

test('Test Instrumentalist with Flautist',()=>{
  musician = new Musician();
  musician.instrument='Flautist';// setting the value
  expect(musician.instrument).toEqual('Flautist');
})

test('Test Instrumentalist with Percussionist',()=>{
  musician = new Musician();
  musician.instrument='Percussionist';// setting the value
  expect(musician.instrument).toEqual('Percussionist');
})

test('Test Instrumentalist with Pianist',()=>{
  expect(() => {
    musician = new Musician();
    musician.instrument='Pianist';// setting the value
    }).toThrowError('Type a correct musician');
  })

  // test a method musicianDetails

  test('Testing musicianDetails with existing instrumentalist',()=>{
    musician1 = new Musician();
    
    musician1.musName ='Kate';
    musician1.instrument = 'Bassist';

    expect(musician1.musicianDetails()).toMatch('My name is Kate and I am a Bassist. The interesting fact about me: Everyone loves a bassist.');
    
})

test('Testing musicianDetails with no existing instrumentalist',()=>{
  expect(() => {
    musician1.musName ='Kate';
    musician1.instrument = 'Pianist';
    }).toThrowError('Type a correct musician');
  })