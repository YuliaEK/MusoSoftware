# Activity
 

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

### Test Completeness:**
•   75% coverage of functions tested by automated testing
•	All Manual & Automated Test cases executed
•	A software test plan must include test cases with purposefully invalid, or incorrect inputs
•	All open bugs are fixed or will be fixed in next release 

### Some objectives of the testing project are:
•	Ensure that MusoPlan conforms to functional requirements
•	Ensure MusoPlan meets the quality specifications defined by the client
•	Bugs/issues are identified and fixed before go live

### Testing Tools
•	Automation Tools (Jest)

## The proposed test plan steps are as follows:

**Identifier:** ‘CREATE MUSICIAN’
 
**Test Case:** Create musician module 
 
• User must be able to create a musician using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 1
Enter instrumentalist (Guitarist/Bassist/Flautist/Percussionist):Bassist
Enter a musician name (3 to 30 characters):Tim
Enter years (Years playing must be non-negative):4
Enter hourly rate (greater than 50):60
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 1
Enter instrumentalist (Guitarist/Bassist/Flautist/Percussionist):Bassist
Enter a musician name (3 to 30 characters):Tim
Enter years (Years playing must be non-negative):4
Enter hourly rate (greater than 50):60

My name is Tim and I am a bassist. Everyone loves a bassist.
Musician created successfully.


**Identifier:** ‘CREATE TROUPE’
 
**Test Case:** Create troupe module 
 
• User must be able to create a troupe using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 2
Enter a troupe name (3 to 30 characters):Best Band
Enter genre (rock, pop, jazz):pop
Enter minimum duration (between 0.5 and 3):2
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 2
Enter a troupe name (3 to 30 characters):Best Band
Enter genre (rock, pop, jazz):pop
Enter minimum duration (between 0.5 and 3):2

My name is Tim and I am a bassist. Everyone loves a bassist.
Troupe created successfully.


**Identifier:** ‘ADD MUS TO TROUPE’
 
**Test Case:** Add a musician to a troupe  
 
• User must be able to add a musician to a troupe using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 3
Enter Troupe Name : Best Band
Enter Musician Name : Tim
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 3
Enter Troupe Name : Best Band
Enter Musician Name : Tim

Musician added to a troupe successfully.


**Identifier:** ‘SUMMARY INFORMATION OF TROUPE’
 
**Test Case:** Provide a summary information of a troupe
 
• User must be able to get information about a troupe using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 4
Press Enter
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 4
Press Enter

Name of the troupe: Best Band ;  Genre: pop ;  Minimum duration: 2
Musician name is: Tim ;  Years of playing: 4 ;  Hourly rate: 60


**Identifier:** ‘DETAILED INFORMATION OF TROUPE’
 
**Test Case:** Provide a detailed information of a troupe
 
• User must be able to get detailed information about a troupe using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 5
Press Enter
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 5
Press Enter

Name of the troupe: Best Band ;  Genre: pop ;  Minimum duration: 2
Musician name is: Tim ;  Years of playing: 4 ;  Hourly rate: 60
My name is Tim and I am a Bassist.
The interesting fact about me: Everyone loves a bassist.


**Identifier:** ‘COST’
 
**Test Case:** Calculate cost of deploying troupe
 
• User must be able to calculate the cost of a troupe using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 6

Enter your troupe name: Best Band
Enter number of hours you would like to hire a troupe: 2
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 6

Enter your troupe name: Best Band
Enter number of hours you would like to hire a troupe: 2

The total cost is:120


**Identifier:** ‘READ’
 
**Test Case:** Read a list of troupe names from a text file
 
• User must be able to read a list of troupe names from a text file using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 7
Press Enter
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 7
Press Enter

Read file .txt


**Identifier:** ‘WRITE’
 
**Test Case:** Write a list of the detailed descriptions for all troupes to a given filename
 
• User must be able to write a list of the detailed descriptions for all troupes to a given filename using user prompt questions. 
 
**Input Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 8
Name your file: Musician
 
**Execution steps:** 
 
1. Run the software using command prompt. 
1. Enter the input values. 
 
**Output Values:** 

Enter your choice [1,2,3,4,5,6,7,8,9] : 8
Name your file: Musician 

Musician.txt 
(Troupe name is: Best Band
The genre is: pop
Troup`s duration is: 2
This troupe Best Band has Tim)
 




