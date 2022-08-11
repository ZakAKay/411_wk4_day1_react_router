import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";


// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
  const { id } = useParams();
  let selectedCar = cars.find((car) => car.id == id); //{id} is the destructuring method of using params.
  let {
    carId,
    Name,
    Miles_per_Gallon,
    Cylinders,
    Displacement,
    Horsepower,
    Weight_in_lbs,
    Year,
    Origin,
  } = selectedCar

  return (
    <div>
 
      <h1>ID# {id} </h1>
      <h1>Name {Name} </h1>
      <h1>Miles per Gallon{Miles_per_Gallon} </h1>
      <h1>Cylinders {Cylinders}</h1>
      <h1>Displacement {Displacement}</h1>
      <h1>Horsepower {Horsepower}</h1>
      <h1>Weight in lbs {Weight_in_lbs}</h1>
      <h1>Year {Year}</h1>
      <h1>Origin {Origin} </h1>

    </div>
  );
};

export default Car;
