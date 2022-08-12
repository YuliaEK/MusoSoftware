# Summary details about the proposed software

**MusoPlan** is a software that will be used in the company by music management to evaluate the success of the musicians by identifying costs when deploying them as a troupe. 

There are 9 functionalities that have to be deployed:
1.	Create a musician
2.	Create a troupe
3.	Add musician to a troupe
4. Provide a summary description of a troupe
5. Provide a detailed description of a troupe
6. Calculate the cost of deploying the troupe for a number of hours
7. Read a list of troupe names to be populated from a file
8. Write a list of the detailed descriptions for all troupes to a given filename
9. Exit

 ## Program inputs and outputs

All the data inputs and outputs operating from the command line


 ## Classes their properties(data) and behaviors (methods)

There are 2 classes and 4 subclasses:
Musician (parent class)
Troupe
Guitarist (child class of Musician)
Bassist (child class of Musician)
Percussionist (child class of Musician)
Flautist (child class of Musician)





**Data**

 Ex: **Musician Class**
 Data: musName, pYear, hRate
 
 
Name (3-30characters)
 Years of playing (more than 0)
Hourly Rate (more than $50 per hour) 

Ex: **Guitarist Class**
Data: inherited from the Musician Class

Ex: **Bassist Class**
Data: inherited from the Musician Class


Ex: **Flautist Class**
Data: inherited from the Musician Class


Ex: **Percussionist Class**
Data: inherited from the Musician Class


Ex: **Troupe Class**
Data: troupeName, genre, minDuration

Troupe Name (3-30characters)
Genre (rock/pop/jazz)
Minimum Duration (0.5 and 3)

**Methods:** 
 
 Ex:
 musicianDetails(musician)

Display name, hourly rate, years of playing, instrument and interesting fact 
 
 
{ // use if condition to match an interesting fact to the particular musician subclass}

troupeDetails (troupe)
{ // use a loop to retrieve information from a musician array and display the name, years of playing and hourly rate of a musician. The method is also used to display the name of the troupe, hourly rate, instruments, genre and minimum duration
}

addMusician (troupe)
{
// use push to add a new array of musicians to a troupe
}

displayDetails (bassist, flautist, guitarist, percussionist)
{
 //use to display the name of the musician and interesting fact once created 
}

**There are some functions:**
createMusician - create a musician.
{ use if condition to make sure that all requirements are followed by the user
}
addMusician – add musician to a list of musicians.
{push a new musician to the list
}

createTroupe – create a new troupe.
{ use if condition to make sure that all requirements are followed by the user
}

getMusicianList - create a list of musicians.
{ retrieve information about a musician in the list 
}

getTroupeList – create a list of troups.
{retrieve information about a troupe in the list
}

addMucisiantoTroupe – add a musician to a particular troupe.
{ add an existing musician to the troupe
}
CalCost – get the cost of a troupe.
{get the price for the troupe depending on the number of musicians and their rates
}
readFile – read list of troupes.
writeFile – write a txt. file with detailed information about troupes (line by line).


 ##**Relationships between classes like Inheritance**

A Musician class will have 4 subclasses Guitarist, Bassist, Percussionist, Flautist

In a Troupe class, a collection of musicians will be stored as an Array.

 
##**SDLC requirement**
The Waterfall Model was used in this project. It is a linear-sequential life cycle model. In a waterfall model, each phase must be completed before the next phase can begin and there is no overlapping in the phases. This means that any phase in the development process begins only if the previous phase is complete. In this waterfall model, the phases do not overlap.
The Waterfall model is the earliest SDLC approach that was used for software development.

 
 ##**VCS**
· All software development must be done using a VCS such as GitHub
· All the documents must be in one separate branch as all the development processes such as creating new files must be in a separate branch as well (not in a main)
· Use commit and so each commit contains the author's name and email address
· A repository must start with just a README.md file and no source code
· README.md should contain information for users on how to deploy a software


