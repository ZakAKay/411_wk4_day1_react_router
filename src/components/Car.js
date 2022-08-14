import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";

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
  } = selectedCar;

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h1> Car Specs</h1>
        {/* {cars.map((Car) => { */}
        <div>
          <h2>{selectedCar.Name}</h2>
          <Chip label={`Id: ${selectedCar.id}`} color="primary" />
          <Chip
            label={`Miles per Gallon: ${selectedCar.Miles_per_Gallon}`}
            color="primary"
          />
          <Chip label={`Cylinders: ${selectedCar.Cylinders}`} color="primary" />
          <Chip
            label={`Displacement: ${selectedCar.Displacement}`}
            color="primary"
          />
          <Chip
            label={`HorsePower: ${selectedCar.Horsepower}`}
            color="primary"
          />
          <Chip
            label={`Weight: ${selectedCar.Weight_in_lbs}`}
            color="primary"
          />
          <Chip
            label={`Acceleration: ${selectedCar.Acceleration}`}
            color="primary"
          />
          <Chip label={`Year: ${selectedCar.Year}`} color="primary" />
          <Chip label={`Origin: ${selectedCar.Origin}`} color="primary" />
        </div>

        {/* <div>
          <h1>ID# {id} </h1>
          <h1>Name {Name} </h1>
          <h1>Miles per Gallon{Miles_per_Gallon} </h1>
          <h1>Cylinders {Cylinders}</h1>
          <h1>Displacement {Displacement}</h1>
          <h1>Horsepower {Horsepower}</h1>
          <h1>Weight in lbs {Weight_in_lbs}</h1>
          <h1>Year {Year}</h1>
          <h1>Origin {Origin} </h1>
        </div> */}
      </Paper>
    </Container>
  );
};

export default Car;
