#**Functionality 1. (Create a Musician)**

Select option 1 from the main menu -> Enter instrumentalist ->  Enter a musician name -> Enter hourly rate -> Enter years of playing 

Musician data requirements are
•	Name between 3 and 30 characters
•	Must play one of the four instruments below
•	Years playing must be non-negative
•	Hourly rate must be over 50

|     Input                                                                                                     |     Expected   output                                        |     Actual   output                                          |   |   |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|---|---|
|     1     Instrumentalist: Bassist     Name: Jack     Hourly Rate: 60     Years of Playing: 5                 |     [Musician { name: Jack, hRate:60,   yPlaying: 5}]        |     [Musician { name: Jack, hRate:60,   yPlaying: 5}]        |   |   |
|     1     Instrumentalist: Singer                                                                             |     Invalid instrument                                       |     Invalid instrument                                       |   |   |
|     1     Instrumentalist: Guitarist     Name:JP                                                              |     Enter a musician name (between 3   and 30 characters)    |     Enter a musician name (between 3   and 30 characters)    |   |   |
|     1     Instrumentalist: Guitarist     Name:Henry     Hourly Rate: 40                                       |     Enter hourly rate (greater than 50)                      |     Enter hourly rate (greater than 50)                      |   |   |
|     1     Instrumentalist: Guitarist     Name:Henry     Hourly Rate: 60     Years of playing:0                |     Enter years of playing (greater   than 0)                |     Enter years of playing (greater   than 0)                |   |   |

#**Functionality 2. (Create a Troupe)**

Select option 2 from the main menu -> Enter name of a troupe ->  Enter  a genre -> Enter minimum duration 

**Troupe data requirements are**
•	Name between 3 and 30 characters
•	No more than 5 musicians
•	Valid genre from (rock, jazz, pop)
•	Minimum duration in hours between 0.5 and 3

|     Input                                                                                                	|     Expected Output                                                   	|     Actual output                                                     	|   	|   	|
|----------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------	|-----------------------------------------------------------------------	|---	|---	|
|     2     Enter a   troupe name: Best Band     Enter a   genre: rock     Enter   minimum duration: 2     	|     [Troupe   {troupeName: Best Band, genre: rock, minDuration:2}]    	|     [Troupe   {troupeName: Best Band, genre: rock, minDuration:2}]    	|   	|   	|
|     2     Enter a   troupe name: BB                                                                      	|     Enter a   name (between 2 and 30 characters)                      	|     Enter a   name (between 2 and 30 characters)                      	|   	|   	|
|     2     Enter a   troupe name: Best Band     Enter a   genre: hip-hop                                  	|     Enter a valid   genre (rock/pop/jazz)                             	|     Enter a   valid genre (rock/pop/jazz)                             	|   	|   	|
|     2     Enter a   troupe name: Best Band     Enter a   genre: jazz     Enter   minimum duration: 5     	|     Enter   minimum duration (between 0.5 and 3)                      	|     Enter   minimum duration (between 0.5 and 3)                      	|   	|   	|


#**Functionality 3. (Add musician to a Troupe)**

Select option 3 from the main menu -> Enter name of a troupe ->  Enter  a name of a musician you want to add -> 
**Troupe data requirements are**
•	No more than 5 musicians

|     Input                                                                     	|     Expected Output                                          	|     Actual output                                            	|   	|   	|
|-------------------------------------------------------------------------------	|--------------------------------------------------------------	|--------------------------------------------------------------	|---	|---	|
|     3     Enter a   troupe name: Best Band     Enter a   name:  Jack          	|     [Troupe   {troupeName: Best Band,  musician:   Jack}]    	|     [Troupe   {troupeName: Best Band,  musician:   Jack}]    	|   	|   	|
|     2     Enter a   troupe name: BB                                           	|     Enter a   troupe name                                    	|     Enter a   troupe name:                                   	|   	|   	|
|     2     Enter a   troupe name: Best Band     Enter a   name: Tim            	|     Enter a name                                             	|     Enter a   name                                           	|   	|   	|


#**Functionality 4. (Provide a summary discription about troupe)**

Select option 4 from the main menu -> Press Enter

|     Input                  	|     Expected Output                                                                                                                                    	|     Actual output                                                                                                                                      	|   	|   	|
|----------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     4     Press   Enter    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55]    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55]    	|   	|   	|
|                            	|                                                                                                                                                        	|                                                                                                                                                        	|   	|   	|
|                            	|                                                                                                                                                        	|                                                                                                                                                        	|   	|   	|


#**Functionality 5. (Provide a detailed discription about troupe)**

Select option 5 from the main menu -> Press Enter

|     Input                  	|     Expected Output                                                                                                                                                                                                                                                   	|     Actual output                                                                                                                                                                                                                                                     	|   	|   	|
|----------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|---	|---	|
|     5     Press   Enter    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55           My name   is Tim and I am a Bassist.           The   interesting about me: Everyone loves a bassist.]    	|     [Name of   the troupe: Lala ;  Genre: pop ;  Minimum duration: 2           Musician   name is: Tim ;  Years of playing: 4   ;  Hourly rate: 55           My name   is Tim and I am a Bassist.           The   interesting about me: Everyone loves a bassist.]    	|   	|   	|
|                            	|                                                                                                                                                                                                                                                                       	|                                                                                                                                                                                                                                                                       	|   	|   	|
|                            	|                                                                                                                                                                                                                                                                       	|                                                                                                                                                                                                                                                                       	|   	|   	|


#**Functionality 6. (Calculate the cost)**

Select option 6 from the main menu ->  Press Enter -> Choose the troupe's name


|     Input                                                                                                 	|     Expected Output                                                                   	|     Actual output                                                                     	|   	|   	|
|-----------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------	|---	|---	|
|     6           Enter your troupe name:Pop     Enter number of hours you would like to hire a troupe:3    	|     [The   total cost is 110]                                                         	|     [The   total cost is 110]                                                         	|   	|   	|
|     6           Enter your troupe name:Gold Class (not existing)                                          	|     [Enter your   troupe name:]                                                       	|     [Enter your   troupe name:]                                                       	|   	|   	|
|     6     Enter your troupe name:Pop     Enter number of hours you would like to hire a troupe:4          	|     [Minimum duration   for this troup is:3 Please enter hours between 0.5 and 3:]    	|     [Minimum duration   for this troup is:3 Please enter hours between 0.5 and 3:]    	|   	|   	|


#**Functionality 7. (Read a list) – under development**

Select option 7 from the main menu ->  Press Enter 


|     Input                      	|     Expected Output             	|     Actual output                        	|   	|   	|
|--------------------------------	|---------------------------------	|------------------------------------------	|---	|---	|
|     7           Press Enter    	|     [Creating   a read file]    	|     [Add  objects instead of strings]    	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|

#**Functionality 8. (Write a list) **

Select option 8 from the main menu ->  Name your file

|     Input                      	|     Expected Output             	|     Actual output                        	|   	|   	|
|--------------------------------	|---------------------------------	|------------------------------------------	|---	|---	|
|     7           Press Enter    	|     [Creating   a read file]    	|     [Add  objects instead of strings]    	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|


#**Functionality 9. (Exit) **

Select option 9 from the main menu ->  Press Enter
|     Input                      	|     Expected Output             	|     Actual output                        	|   	|   	|
|--------------------------------	|---------------------------------	|------------------------------------------	|---	|---	|
|     7           Press Enter    	|     [Creating   a read file]    	|     [Add  objects instead of strings]    	|   	|   	|
|                                	|                                 	|                                          	|   	|   	|
|                      


#**Functionality 8. (Write a list) **

Select option 8 from the main menu ->  Name your file

|     Input                                                   	|     Expected Output                                 	|     Actual output                                   	|   	|   	|
|-------------------------------------------------------------	|-----------------------------------------------------	|-----------------------------------------------------	|---	|---	|
|     8           Press Enter     Name your file: Musician    	|     [Creating   a .txt file: Musician.txt]          	|     [Creating   a .txt file: Musician.txt]          	|   	|   	|
|                                                             	|                                                     	|                                                     	|   	|   	|
|                                                             	|                                                     	|                                                     	|   	|   	|


#**Functionality 9. (Exit) **

Select option 9 from the main menu ->  Press Enter

|     Input                      	|     Expected Output                      	|     Actual output                   	|   	|   	|
|--------------------------------	|------------------------------------------	|-------------------------------------	|---	|---	|
|     9     Press Enter          	|     [Return   to your terminal]          	|     [[Return   to your terminal]    	|   	|   	|
|                                	|                                          	|                                     	|   	|   	|
|                                	|                                          	|                                     	|   	|   	|
