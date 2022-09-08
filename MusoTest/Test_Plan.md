# Activity 2
 

## MusoPlan Software
 
**Prepared by** 
Yulia Erenkova
 
 
## Introduction
MusoPlan is a software solution to help Globex Corporation’s management evaluate the success of the musicians by adding them to a troupe and calculating their cost.  The software will be under manual and automated testing to ensure that MusoPlan meets the quality specifications defined by the client and to identify all the unexpected behavior of the functions and methods and then fix them.

## Scope

Manual testing will be used for four Functions and automated testing for Classes and Methods inside them.
Under manual testing, developer will check the codes that drive each of these functions to ensure they work as the client intends and evaluate software from the user's perspective.

To conduct automation testing there will be used Jest. Jest is an open-source testing framework built on JavaScript.

There will be implemented three test case design techniques: Base Cases, Edge Cases, and  Boundary Values.

### Test Completeness:
•	75% coverage of functions tested by automated testing
•	All Manual & Automated Test cases executed
•	A software test plan must include test cases with purposefully invalid, or incorrect inputs
•	All open bugs are fixed or will be fixed in next release 

### Some objectives of the testing project are:
•	Ensure that MusoPlan conforms to functional requirements
•	Ensure MusoPlan meets the quality specifications defined by the client
•	Bugs/issues are identified and fixed before go live

### Testing Tools
**Automation Tools (Jest)**

**The proposed test plan steps are as follows:**

**Identifier:** ‘MUSICIAN NAME’

• User must be able to type a musician name and the name must be from 3 to 30 characters.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Test Musician Name for more or equal to 3 characters value
 
**Input Values:** 

Type 3 characters for example “Tim”
 
**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test Musician Name for less than 3 characters value

**Input Values:** 

Type 2 characters for example “Li”
 
**Output Values:** 

Expected: Invalid Musician Name (Name should be between 3 and 30 characters) 


**Test Case:** Test Musician Name for more than 30 characters value

**Input Values:** 

Type more than 30 characters in a name section
 
**Output Values:** 

Expected: Invalid Musician Name (Name should be between 3 and 30 characters)

**Identifier:** ‘YEARS OF PLAYING’

• User must be able to type years of playing more than 0.

**Execution steps:** 

1. Run the software using command prompt. 
2. Enter the input values.
   
**Test Case:** Test years of playing for more than 0 value

**Input Values:** 
  
Type the value that more than 0 for example 2

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test years of playing for less than  0 value

**Input Values:** 
  
Type the value that less than 0 for example -1

**Output Values:** 

Expected: Years playing must be non-negative


**Test Case:** Test years of playing equal to 0 value

**Input Values:** 
  
Type the value equal to 0 

**Output Values:** 

Expected: Years playing must be non-negative


**Identifier:** ‘HOURLY RATE’

• User must be able to type hourly rate more or equal to 50 value.

**Execution steps:** 

1. Run the software using command prompt. 
2. Enter the input values.
   
**Test Case:** Test hourly rate more than 50 value

**Input Values:** 
  
Type the value that more than 50 for example 55

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test hourly rate equal to 50 value

**Input Values:** 
  
Type the value that equal to 50 value

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test hourly rate less than 50 value

**Input Values:** 
  
Type the value that less than 50 value

**Output Values:** 

Expected: Hourly rate must be over or equal to 50


**Identifier:** ‘VALID INSTRUMENTALIST’

• User must be able to type Guitarist/Bassist/Flautist/Percussionist.

**Execution steps:** 

1. Run the software using command prompt. 
2. Enter the input values.
   
**Test Case:** Test Instrumentalist with Guitarist

**Input Values:** 
  
Type the value “Guitarist”

**Output Values:** 

Expected: user must be able to continue the process of creating a musician
**Test Case:** Test Instrumentalist with Bassist

**Input Values:** 
  
Type the value “Bassist”

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test Instrumentalist with Flautist

**Input Values:** 
  
Type the value “Flautist”

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test Instrumentalist with Percussionist

**Input Values:** 
  
Type the value “Percussionist”

**Output Values:** 

Expected: user must be able to continue the process of creating a musician


**Test Case:** Test Instrumentalist with Pianist

**Input Values:** 
  
Type the value “Pianist”

**Output Values:** 

Expected: Type a correct musician



**Identifier:** ‘MUSICIAN DETAILS’

• User must be able to type Guitarist/Bassist/Flautist/Percussionist.

**Execution steps:** 

1. Run the software using command prompt. 
2. Enter the input values.  

**Test Case:** Testing musicianDetails with existing instrumentalist

**Input Values:** 
  
Type the value of existing musician for example Name: Kate; Instrumentalist: Bassist

**Output Values:** 

Expected: 'My name is Kate and I am a Bassist. The interesting fact about me: Everyone loves a bassist.'


**Test Case:** Testing musicianDetails with no existing instrumentalist

**Input Values:** 
  
Type the value of no existing musician for example Name: Bill; Instrumentalist: Guitarist

**Output Values:** 

Expected: Type a correct musician




**Identifier:** ‘TROUPE NAME’

• User must be able to type a troupe name and the name must be from 3 to 30 characters.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Test Troupe Name for more than 3 characters value
 
**Input Values:** 

Type 3 characters for example “Gold Class”
 
**Output Values:** 

Expected: user must be able to continue the process of creating a troupe


**Test Case:** Test Troupe Name for less than 3 characters value
 
**Input Values:** 

Type 2 characters for example “GC”
 
**Output Values:** 

Expected: Invalid Troupe Name (Name should be between 3 and 30 characters)


**Test Case:** Test Troupe Name with more 30 characters value
 
**Input Values:** 

Type 30 characters value in the name field
 
**Output Values:** 

Expected: Invalid Troupe Name (Name should be between 3 and 30 characters)


**Identifier:** ‘TROUPE GENRE’

• User must be able to type a genre pop/rock/jazz

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Test Troupe Genre that exist
 
**Input Values:** 

Type pop/jazz/rock
 
**Output Values:** 

Expected: user must be able to continue the process of creating a troupe


**Test Case:** Test Troupe Genre that doesn’t exist
 
**Input Values:** 

Type hip-hop
 
**Output Values:** 

Expected: Invalid genre. Please enter pop/jazz/rock




**Identifier:** ‘MINIMUM DURATION’

• User must be able to type a minimum duration between 0.5 and 3.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Test Troupe minimum duration more than 0.5 and less than 3
 
**Input Values:** 

Type 1 value
 
**Output Values:** 

Expected: user must be able to continue the process of creating a troupe


**Test Case:** Test Troupe minimum duration equal to 0.5
 
**Input Values:** 

Type 0.5 value
 
**Output Values:** 

Expected: user must be able to continue the process of creating a troupe


**Test Case:** Test Troupe minimum duration equal to 3
 
**Input Values:** 

Type 3 value
 
**Output Values:** 

Expected: user must be able to continue the process of creating a troupe


**Test Case:** Troupe minimum duration less than 0.5
 
**Input Values:** 

Type 0.1 value
 
**Output Values:** 

Expected: Enter number of hours between 0.5 and 3

**Test Case:** Troupe minimum duration more than 3
 
**Input Values:** 

Type 4 value
 
**Output Values:** 

Expected: Enter number of hours between 0.5 and 3


**Identifier:** ‘ADD MUSICIAN’

• User must be able to add a musician to a troupe.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Add one musician to a troupe
 
**Input Values:** 

Add an existing musician to a troupe by typing the name
 
**Output Values:** 

Expected: number of musician in a troupe must be equal to one


**Test Case:** Add two musicians to a troupe
 
**Input Values:** 

Add existing musicians to a troupe by typing their names
 
**Output Values:** 

Expected: number of musician in a troupe must be equal to two


**Identifier:** ‘TROUPE DETAILS’

• User must be able get a troupe details.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Testing a troupe’s details
 
**Input Values:** 

Type number 4 in a software and press “Enter”
 
**Output Values:** 

Expected: 'Name of the troupe: ' +' ' Genre: '+ ' Minimum duration: ‘ +' Musician name is:'+' Years of playing: ' +' Hourly rate:'



**Identifier:** ‘DISPLAY DETAILS’

• User must be able get a troupe details.

**Execution steps:** 
 
1. Run the software using command prompt. 
2. Enter the input values.
 
**Test Case:** Testing Bassisst displayDetails
 
**Input Values:** 

Type a name of a musician and instrumentalist
 
**Output Values:** 

Expected: 'Name of a musician + is + a instrumentalist. Interesting fact.'


 




