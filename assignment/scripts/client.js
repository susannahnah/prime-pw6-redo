let garage = [];

function newCar( yearIn, makeIn, modelIn ){
  console.log( 'in newCar:', yearIn, makeIn, modelIn );
  let newCarObject = {
    year: yearIn,
    make: makeIn,
    model: modelIn
  }
  garage.push(newCarObject);
  return true;
} // end newCar
