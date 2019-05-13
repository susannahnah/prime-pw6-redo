 # Tier 1 Week 6

In this week's assignment, you've been given a project that allows users to add cars to a garage. Your assignment is to use jQuery to connect this functionality to the DOM. Also, make sure to add some styling via CSS.

## Existing Script
You will need to source jQuery in your index.html in order to complete this assignment. If you need some help doing this, take a look at the instructions [here](jQuery_instructions.md).

You'll find that a 'client.js' file already exists and is linked to the HTML file. In here most of the scripting logic is already working. When run, the "newCar" function creates a new car object and pushes it into the "garage" array.

You can test these by running the following commands in the console:

- ```garage``` (will show an empty array at first)
- ```newCar( 1991, 'Plymouth', 'Horizon' )```
- ```garage``` (should now show an array with the one car input above within)

## Assignment

### Required Features
1. Add an interface for the user to add cars to the garage with 3 input fields:

- year
- make
- model

Also an "add car" button that, when clicked, *uses the existing "newCar" function* to add a car to the garage.

2. Display the cars in the garage in an unordered list on the DOM.

3. Add some styling via a CSS file (the file has been created, you need to source it into your HTML)

### Stretch Goals

- Clear inputs when a car is added
- don't allow a car to be added if any fields are left blank
- have a maximum number of spaces in the garage. Disable inputs if the garage is full
- add another input field, this one should take in text for a url to an image (like a Google image result when you search for `car`), add it to the object with the rest of the car's information, and display the image (using an `<img>` tag) for each car as well as its year/make/model text

**REMINDER**: Make sure to respond to this week's Slack discussion question!
