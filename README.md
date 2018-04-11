# Prework Week 6

In this week's assignment, you've been given a simple project that allows users to add cars to a garage with the client side scripts. Your assignment is to use JQuery to connect this functionality to the DOM. Also, make sure to add some styling via CSS.

## existing script
You'll find that a 'client.js' file already exists and is linked to the HTML file. In here most of the scripting logic is already working. There is a "Car" class which is used in the "newCar" function. When run, the "newCar" function creates a new car and pushes it into the "garage" array.

You can test these by running the following commands in the console:

- ```garage``` (will show an empty array at first)
- ```newCar( 1991, 'Plyouth', 'Horizon' )```
- ```garage``` (should now show an array with the one car input above within)

## Assignment

### Base Mode
1. Add an interface for the user to add cars to the garage with 3 input fields:

- year
- make
- model

Also an "add car" button that, when clicked, uses the existing "newCar" function to add a car to the garage.

2. Display the cars in the garage in an unordered list on the DOM.

3. Add some styling via a CSS file

### Hard Mode

- Clear inputs when a car is added
- don't allow a car to be added if any fields are left blank
- have a maximum number of spaces in the garage. Disable inputs if the garage is full

### Pro Mode
- add another input field, this one should take in text for a url to an image (like a search result with you search for `car` in Google image search)
- display the image for each car as well as it's year/make/model text

### Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
