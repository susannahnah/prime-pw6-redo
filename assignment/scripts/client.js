$( document ).ready( readyNow );

  let garage = [];
  //create empty Array

  function newCar(){
    console.log( 'in newCar:' );
      let newCarObject = {
        year: $( '#yearIn' ).val(),
        make: $( '#makeIn' ).val(),
        model: $( '#modelIn' ).val()
      }; //push cars into array
    garage.push(newCarObject);
    //empty inputs
    $( '#yearIn' ).val( '' ),
    $( '#makeIn' ).val( '' ),
    $( '#modelIn' ).val( '' );
  } // end newCar
  //empty inputs

function readyNow(){
  $( '#addNewCarButton' ).on( 'click', newCar );
}
