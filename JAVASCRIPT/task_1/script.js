const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 100,
};

function displayCarInfo(car) {
    console.log("Manufacturer:", car.manufacturer);
    console.log("Model:", car.model);
    console.log("Year:", car.year);
    console.log("Average Speed:", car.averageSpeed + " km/h");
}

function calculateTravelTime(distance) {
    const travelTime = distance / car.averageSpeed;
    const restTime = Math.floor(travelTime / 4);

    const totalTravelTime = travelTime + restTime;

    console.log("Distance:", distance + " km");
    console.log("Estimated Travel Time:", totalTravelTime.toFixed(2) + " hours");
}

displayCarInfo(car);
calculateTravelTime(500);
