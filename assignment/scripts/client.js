$( document ).ready( readyNow );

  let garage = [];
  //create empty Array

  function newCar( yearIn, makeIn, modelIn ){
    console.log( 'in newCar:' );
      let newCarObject = {
        year: $( '#yearIn' ).val(),
        make: $( '#makeIn' ).val(),
        model: $( '#modelIn' ).val()
      }; //push cars into array
    garage.push(newCarObject);
    //empty inputs
    $( '#yearIn' ).val( '' );
    $( '#makeIn' ).val( '' );
    $( '#modelIn' ).val( '' );
    displayCars();
    return true;
    //update DOM
  }//add cars into array
  //empty inputs

function readyNow(){
  console.log( 'JQ' );
  $( '#addNewCarButton' ).on( 'click', newCar );
}
//give button action

function displayCars() {
  console.log( 'in displayCars' );
  //target output by ID
  let el = $( '#carsGoIn'  );
//empty
  el.empty();
//loop through purchases
  for( car of garage ){
    el.append( '<li>' + car.make + ', ' + car.model + ', ' + car.year + '</li>');
  }
//for each purchase, create a list
//display cars in the garage
}
