class Car{
  constructor( year, make, model ){
    this.year = year;
    this.make = make;
    this.model = model;
  } //end constructor
} // end Car class

let garage = [];

function newCar( year, make, model ){
  console.log( 'in newCar:', year, make, model );
  garage.push( new Car( year, make, model ) );
  displayCars();
  return true;
} // end newCar

function displayCars(){
  let $el = $( '#carsOut' );
  $el.empty();
  for( car of garage ){
    $el.append( '<li>' + car.year + ' ' + car.make + ' ' + car.model + '</li>' );
  } //end for
} // end displayCars

$( document ).ready( function(){
  $( '#addCarButton' ).on( 'click', function(){
    newCar( $( '#yearIn' ).val(), $( '#makeIn' ).val(), $( '#modelIn' ).val() );
  }); //end addCarButton on click
}); //end doc ready
