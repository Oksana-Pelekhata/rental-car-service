import CarCard from 'components/CarCard/CarCard'
import React from 'react'

const FavouritesPage = () => {
  const car = {
        "id": 9584,
        "year": 2019,
        "make": "Volvo",
        "model": "XC90",
        "type": "SUV",
        "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg",
        "description": "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
        "fuelConsumption": "8.3",
        "engineSize": "2.0L 4-cylinder",
        "accessories": [
            "Nappa leather seats",
            "Bowers & Wilkins premium sound system",
            "Head-up display"
        ],
        "functionalities": [
            "IntelliSafe advanced safety features",
            "Pilot Assist semi-autonomous driving",
            "Four-zone automatic climate control"
        ],
        "rentalPrice": "$50",
        "rentalCompany": "Premium Auto Rentals",
        "address": "456 Example Avenue, Lviv, Ukraine",
        rentalConditions: "Minimum age: 21\nValid driver's license\nProof of insurance required",
        "mileage": 5352
  }
  
  return (
    <CarCard car={car} />
  )
}

export default FavouritesPage