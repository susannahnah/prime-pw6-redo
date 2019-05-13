$( document ).ready( readyNow );

function readyNow(){
  console.log( 'JQ' );

function addNewCar(){
  console.log( 'in addNewCar' );
  //get user inputs
  //create new object
} //end addNewCar

  $( '#addNewCarButton' ).on( 'click', addNewCar );
}
//end readyNow
//handle click event

let garage = [];
//create empty Array

function addNewCar(){
  console.log( 'addNewCar pressed' );
  let buttonOutput = 'Car added, ' +  $( '#makeInput').val();
  console.log(buttonOutput);
}

function addNewCar(){
  console.log( 'addNewCar pressed' );
  let buttonOutput = $( '#modelInput').val();
  console.log(buttonOutput);
}

function addNewCar(){
  console.log( 'addNewCar pressed' );
  let buttonOutput = $( '#yearInput').val();
  console.log(buttonOutput);
}
//target car input elements


function newCar( yearIn, makeIn, modelIn ){
  console.log( 'in newCar:', yearIn, makeIn, modelIn );
  let newCarObject = {
    year: yearIn,
    make: makeIn,
    model: modelIn
  };
  garage.push(newCarObject);
  return true;
} // end newCar
