# Test Requirements Document
Prepared By, 
Yulia Erenkova 

## Introduction
MusoPlan is a software solution to help Globex Corporation’s management evaluate the success of the musicians by adding them to a troupe and calculating their cost.  This test requirement document will be used by a developer/developers team to plan, execute and record the outcome of the testing.

## Test Requirements**
This test requirement document confirms that there will be a manual and automated testing techniques. Manual testing will be used for four Functions and automated testing for Classes and Methods inside them.
Under manual testing, testers would check the codes that drive each of these functions to ensure they work as the client intends and the client evaluate software from the user's perspective.

The purpose is to identify bugs or defects, ensure the product is error-free, and check it conforms to specified functional requirements.
To conduct automation testing there will be used Jest. Jest is an open-source testing framework built on JavaScript.

There will be implemented three test case design techniques: Base Cases, Corner Cases and Edge Cases.

The below mentioned are the test scenarios that will be tested thoroughly for quality purposes. 

## Manual testing:

 **1)Create a musician**

**Musician data requirements are**
1. Name between 3 and 30 characters
2. Years playing must be non-negative 
3. Hourly rate must be over 50
4. Must play one of the four instruments 

**2)Create a troupe**

**Troupe data requirements are**

1. Name between 3 and 30 characters
2. No more than 5 musicians
3. Valid genre from (rock, jazz, pop)
4. Minimum duration in hours between 0.5 and 3

**3)Add a musician to a troupe**

1. No more than 5 musicians

**4)Provide a summary description of a troupe**

1. The troupe's name
2. How many of which instruments it contains
3. What genre the troupe plays
4. The minimum duration of a booking
5. The hourly rate for the whole troupe

## Automated testing

**1) Class “Musician**

Test setters:
1. Name between 3 and 30 characters
2. Years playing must be non-negative 
3. Hourly rate must be over 50
4. Must play one of the four instruments 
Test methods:
musicianDetails:
1.Name of a musician
2. Instrument that he/she plays on

**2) Subclass “Guitarist”, “Flautist”, “Bassist”, “Percussionist”**
Test method:
displayDetails:
1. Name of a musician
2. Interesting fact

**3) Class “Troupe”**

Test setters:
1. Name between 3 and 30 characters
2. No more than 5 musicians
3. Valid genre from (rock, jazz, pop)
4. Minimum duration in hours between 0.5 and 3
Test methods:
addMusician
troupeDetails:
1. Name of a troupe
2. Genre of a troupe
3. Minimum duration of a troupe
4. Musician Name, Years of playing, Hourly Rate









