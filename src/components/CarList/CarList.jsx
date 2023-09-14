import React from 'react'

const CarList = ({ carsList }) => {
  
  return (
    carsList.length > 0 && (
      <div>
        {carsList.map((car) => {
          console.log('car', car)
          const city = car.address.split(',')[1];
          const country = car.address.split(',')[2];

          return (
            <div key={car.id}>
              <div>
                <img src={car.img } alt={`${car.make} ${car.model}`} />
              <svg></svg>
              </div>
              <div>
                <p>{car.make}
                  <span>{car.model}</span>
                  , {car.year}
                </p>
                <p>{car.rentalPrice} </p>
              </div>
              <div>
                <div>
                  <p>{city} </p>
                </div>
                <div>
                  <p>{country} </p>
                </div>
                <div>
                  <p>{car.rentalCompany} </p>
                </div>
              </div>
              <div>
                <div>
                <p>{car.type} </p>
                </div>
                <div>
                  <p>{car.model} </p>
                </div>
                 <div>
                  <p>{car.id} </p>
                </div>
                <div>
                  <p>{car.functionalities[0]} </p>
                </div>
              </div>
              
          </div>
        )
        })}
    </div>
      
   )
  )
}

export default CarList