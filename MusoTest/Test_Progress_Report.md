**##Test progress report**

**##Manual testing results**

**Date: 09/08/2022**

**Identifier:** ‘CREATE MUSICIAN’
**Test Case:** Create musician module
**Preconditions:** User must enter 1 and follow the instructions 
**Input Values:** 1

**Test Steps:**

User should be able to create a musician using user prompt questions.

Select option 1 from the main menu -> Enter instrumentalist ->  Enter a musician name -> Enter hourly rate -> Enter years of playing 

**Expected Result:** Musician created successfully.

|     Input    	|     Expected   output    	|     Actual   output    	|  	|  	|
|---	|---	|---	|---	|---	|
|     1     Enter instrumentalist   (Guitarist/Bassist/Flautist/Percussionist):Bassist     Enter a musician name (3 to   30 characters):Lina     Enter years (Years playing   must be non-negative):4     Enter hourly rate (greater than   50):55    	|     My name is Lina and I am a bassist.   Everyone loves a bassist.     [     Bassist {mus_name: 'Lina',   years_pl: '4', hourly_rate: '55',instrum: 'Bassist'       }]     A musician created   successfully    	|     My name is Lina and I am a bassist.   Everyone loves a bassist.     [     Bassist {mus_name: 'Lina',   years_pl: '4', hourly_rate: '55',instrum: 'Bassist'         }]     A musician created successfully    	|  	|  	|
|     1     Enter instrumentalist   (Guitarist/Bassist/Flautist/Percussionist): Pianist          	|     Invalid instrument    	|     Invalid instrument    	|  	|  	|
|     1     Enter instrumentalist   (Guitarist/Bassist/Flautist/Percussionist):Bassist     Enter a musician name (3 to   30 characters):JD          	|     Enter a musician name (between 3   and 30 characters)    	|     Enter a musician name (between 3   and 30 characters)    	|  	|  	|
|     1     Enter instrumentalist   (Guitarist/Bassist/Flautist/Percussionist):Bassist     Enter a musician name (3 to   30 characters):Lina     Enter years (Years playing   must be non-negative):0          	|     Enter years of playing (greater   than 0)    	|     Enter years of playing (greater   than 0)    	|  	|  	|
|     1     Enter instrumentalist   (Guitarist/Bassist/Flautist/Percussionist):Bassist     Enter a musician name (3 to   30 characters):Lina     Enter years (Years playing   must be non-negative):4     Enter hourly rate (greater than   50):40          	|     Enter hourly rate (greater than 50)    	|     Enter hourly rate (greater than 50)    	|  	|  	|

**2.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘CREATE TROUPE’
**Test Case:** Create troupe module
**Preconditions:** User must enter 2 and follow the instructions 
**Input Values:** 2

**Test Steps:**

User should be able to create a troupe using user prompt questions.

Select option 2 from the main menu -> Enter name of a troupe ->  Enter  a genre -> Enter minimum duration

**Expected Result:** Troupe created successfully.


|     Input                                                                                                                                                                	|     Expected Output                                                                                                                                                                 	|     Actual output                                                                                                                                                                   	|   	|   	|
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     2     Enter a   troupe name (3 to 30 characters):Best Band           Enter   genre (rock, pop, jazz):pop           Enter   minimum duration (between 0.5 and 3):2    	|     [       Troupe {         musinTroupe: [],         troupe_name: 'Best Band',         trgenre: 'pop',         minduration: '2'       }     ]     Troupe   created successfully    	|     [       Troupe {         musinTroupe: [],         troupe_name: 'Best Band',         trgenre: 'pop',         minduration: '2'       }     ]     Troupe   created successfully    	|   	|   	|
|     2     Enter a   troupe name (3 to 30 characters):BB                                                                                                                  	|     Enter a   troupe name (3 to 30 characters):                                                                                                                                     	|     Enter a   troupe name (3 to 30 characters):                                                                                                                                     	|   	|   	|
|     2     Enter a   troupe name (3 to 30 characters):Best Band           Enter   genre (rock, pop, jazz):hip-hop                                                         	|     Enter a   valid genre (rock/pop/jazz):                                                                                                                                          	|     Enter a   valid genre (rock/pop/jazz):                                                                                                                                          	|   	|   	|
|     2     Enter a   troupe name (3 to 30 characters):Best Band           Enter   genre (rock, pop, jazz):pop           Enter   minimum duration (between 0.5 and 3):4    	|     Enter   minimum duration (between 0.5 and 3):                                                                                                                                   	|     Enter   minimum duration (between 0.5 and 3):                                                                                                                                   	|   	|   	|


**3.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘ADD MUS TO TROUPE’
**Test Case:** Add musician to a troupe
**Preconditions:** User must enter 3 and follow the instructions 
**Input Values:** 3

**Test Steps:**

User should be able to add a created musician to a created troupe using user prompt questions.

Select option 3 from the main menu -> Enter name of a troupe ->  Enter  a name of a musician you want to add -> Press Enter


**Expected Result:** Musician has been added to the troupe successfully.

|     Input                                                                                                                                                                                                                                                                                                                                                                                                   	|     Expected   Output                                                                                      	|     Actual   output                                                                                                                	|   	|   	|
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     3     [         Bassist {           mus_name: 'Tim',           years_pl: '3',           hourly_rate: '55',           instrum: 'Bassist'       }     ]     [         Troupe {           musinTroupe: [],           troupe_name: 'Best Band',           trgenre: 'pop',           minduration: '2'       }     ]     Enter Troupe Name : Best Band     Enter Musician Name : Tim                          	|     [Troupe {troupeName: Best Band,  musician: Jack}]           Musician added to a troupe successfully    	|     [Troupe {troupeName: Best Band,  musician: Jack}]           Musician added to a troupe successfully                            	|   	|   	|
|     3     [         Bassist {           mus_name: 'Tim',           years_pl: '3',           hourly_rate: '55',           instrum: 'Bassist'       }     ]     [         Troupe {         musinTroupe:   [],           troupe_name: 'Best Band',           trgenre: 'pop',           minduration: '2'       }     ]     Enter Troupe Name : BB                                                               	|     Enter a troupe name:                                                                                   	|     Enter a troupe name:BB     Enter a musician name:                                                                              	|   	|   	|
|     3     [         Bassist {           mus_name: 'Tim',           years_pl: '3',           hourly_rate: '55',           instrum: 'Bassist'       }     ]     [         Troupe {           musinTroupe: [],           troupe_name: 'Best Band',           trgenre: 'pop',           minduration: '2'       }     ]     Enter Troupe Name : BB     Enter Musician Name: Tim                                  	|     Enter a troupe name:                                                                                   	|     Enter a troupe name: BB     Enter a musician  name: Tim           (*Musician hasn’t been added to the troupe)                  	|   	|   	|
|     3     [         Bassist {           mus_name: 'Tim',           years_pl: '3',           hourly_rate: '55',           instrum: 'Bassist'       }     ]     [         Troupe {           musinTroupe: [],           troupe_name: 'Best Band',           trgenre: 'pop',           minduration: '2'       }     ]     Enter Troupe Name : Best Band     Enter Musician Name : Jack (not existing)          	|     Enter a troupe name: Best Band     Enter an existing musician:                                         	|     Enter a troupe name: Best Band     Enter a musician  name: Jack           (*Musician hasn’t been added to the troupe)          	|   	|   	|

**4.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘SUMMARY INFORMATION OF TROUPE’
**Test Case:** Provide a summary description of a troupe
**Preconditions:** User must enter 4 and follow the instructions 
**Input Values:** 4

**Test Steps:**

User should be able to get summary description about created troupe/troupes using user prompt questions.

Select option 4 from the main menu  -> Press Enter

**Expected Result:** Summary details about the troupe and musician/musicians in that troupe.

|     Input                  	|     Expected Output                                                                                                                                         	|     Actual output                                                                                                                                           	|   	|   	|
|----------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     4     Press   Enter    	|     Name of   the troupe: Best Band ;  Genre: pop   ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 3   ;  Hourly rate: 55    	|     Name of   the troupe: Best Band ;  Genre: pop   ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 3   ;  Hourly rate: 55    	|   	|   	|
|                            	|                                                                                                                                                             	|                                                                                                                                                             	|   	|   	|
|                            	|                                                                                                                                                             	|                                                                                                                                                             	|   	|   	|

**5.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘DETAILED INFORMATION OF TROUPE’
**Test Case:** Provide a summary description of a troupe
**Preconditions:** User must enter 5 and follow the instructions 
 **Input Values:** 5

**Test Steps:**

User should be able to get summary description about created troupe/troupes using user prompt questions.

Select option 5 from the main menu -> Press Enter

**Expected Result:** Summary details about the troupe and musician/musicians in that troupe.

|     Input                  	|     Expected Output                                                                                                                                                                                                                                                   	|     Actual output                                                                                                                                                                                                                                                     	|   	|   	|
|----------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     5     Press   Enter    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55           My name   is Tim and I am a Bassist.           The   interesting about me: Everyone loves a bassist.]    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55           My name   is Tim and I am a Bassist.           The   interesting about me: Everyone loves a bassist.]    	|   	|   	|
|                            	|                                                                                                                                                                                                                                                                       	|                                                                                                                                                                                                                                                                       	|   	|   	|
|                            	|                                                                                                                                                                                                                                                                       	|                                                                                                                                                                                                                                                                       	|   	|   	|

**6.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘COST’
**Test Case:** Calculate cost of deploying troupe
**Preconditions:** User must enter 6 and follow the instructions 
**Input Values:** 6

**Test Steps:**

User must be able to calculate the cost of a troupe using user prompt questions.

Select option 6 from the main menu -> Enter a troupe name -> Enter a number of hours you would like to hire a troupe

**Expected Result:** Cost of a troupe

|     Input                                                                                                              	|     Expected Output                                                                       	|     Actual output                                                                         	|   	|   	|
|------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------	|-------------------------------------------------------------------------------------------	|---	|---	|
|     6           Enter your troupe name: Best Band           Enter number of hours you would like to hire a troupe:2    	|     [The cost   is 110]                                                                   	|     [The cost   is 110]                                                                   	|   	|   	|
|     6           Enter your troupe name: Gold Class (not existing)                                                      	|           Enter your troupe name:                                                         	|           Enter your troupe name:                                                         	|   	|   	|
|     6           Enter your troupe name: Best Band           Enter number of hours you would like to hire a troupe:4    	|           Minimum   duration for this troup is:2 Please enter hours between 0.5 and 3:    	|           Minimum   duration for this troup is:2 Please enter hours between 0.5 and 3:    	|   	|   	|

**7.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘READ’
**Test Case:** Read a list of troupe names from a text file
**Preconditions:** User must enter 7 and press Enter 
**Input Values:** 7

**Test Steps:**

User must be able to read a list of troupe names from a text file using user prompt questions. 

Select option 7 from the main menu -> Press Enter

**Expected Result:** Read file .txt

|     Input                      	|     Expected Output             	|     Actual output                        	|   	|   	|
|--------------------------------	|---------------------------------	|------------------------------------------	|---	|---	|
|     7           Press Enter    	|     [Creating   a read file]    	|     [Add  objects instead of strings]    	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|

**8.The proposed test plan steps are as follows:** 
 
**Identifier:** ‘WRITE’
**Test Case:** Write a list of the detailed descriptions for all troupes to a given filename
**Preconditions:** User must enter 8 and press Enter 
**Input Values:** 8

**Test Steps:**

User must be able to write a list of the detailed descriptions for all troupes to a given filename using user prompt questions.

Select option 8 from the main menu -> Name your file

**Expected Result:** Musician.txt 

|     Input                                                   	|     Expected Output                                 	|     Actual output                                   	|   	|   	|
|-------------------------------------------------------------	|-----------------------------------------------------	|-----------------------------------------------------	|---	|---	|
|     8           Press Enter     Name your file: Musician    	|     [Creating   a .txt file: Musician.txt]          	|     [Creating   a .txt file: Musician.txt]          	|   	|   	|
|                                                             	|                                                     	|                                                     	|   	|   	|
|                                                             	|                                                     	|                                                     	|   	|   	|

**##Automated testing results**

**Date: 10/08/2022**



85% coverage of functions tested by automated testing

Two screenshots of the automated testing results are included in a Test folder.
A screenshot of an appending with a JUnit XML document is located in a Test folder.

**All the classes and methods were tested:**
**1) Class “Musician**
Test setters:
1. Name between 3 and 30 characters
2. Years playing must be non-negative 
3. Hourly rate must be over 50
4. Must play one of the four instruments 
Test methods:
musicianDetails:
1. Name of a musician
2. Instrument that he/she plays on

**2) Subclass “Guitarist”, “Flautist”, “Bassist”, “Percussionist”**
Test method:
displayDetails:
1. Name of a musician
2. Interesting fact

**3) Class “Troupe”**
Test setters:
1.Name between 3 and 30 characters
2.No more than 5 musicians
3.Valid genre from (rock, jazz, pop)
4.Minimum duration in hours between 0.5 and 3
Test methods:
addMusician
troupeDetails:
1.Name of a troupe
2.Genre of a troupe
3.Minimum duration of a troupe
4.Musician Name, Years of playing, Hourly Rate

**##Defects identified during testing and strategies for amending defects**

Defect Identifier: ‘READ FUNCTION’
Defect description. Defect was found in a Read module, all the values convert into objects in .txt file not strings. The defect causes minimum deviation from product requirements
Version: 1.0.0.
Steps: There were couple of attempts to fix the function. 
Ex. 
**Previous function**
function  ReadList(filename){
const info = readFileSync(filename, ‘utf-8)
} 
**Amended function**
function  ReadList(){
const info = readFileSync(‘myfile.txt’, ‘utf-8)
}
All the attempts were unsuccessful. The function still has to be fixed.
Date Raised: 5.08.2022

**Plan to amend the defect**
Schedule fixing: create a schedule to fix these defect;
Fix the defect: fix the defect;
Report the resolution: write a report of the resolution when defect is fixed.

