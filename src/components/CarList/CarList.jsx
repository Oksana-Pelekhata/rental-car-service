import React, { useState } from 'react'
import { CardItem, CardList, Img, ImgThumb, CardHeader, CardModel, CardHeaderThumb, DescriptionThumb, DescriptionWrapper, Description, LearnMoreBtn } from './CarList.styled';

import CarCard from 'components/CarCard/CarCard';
import Modal from 'components/Modal/Modal';

const CarList = ({ carsList }) => {
  const [isShowModal, setIsShowModal] = useState(false)

	const openModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)
  
  return (
    carsList.length > 0 && (
      <CardList style={{padding: '0px 100px'}} >
        {carsList.map((car) => {
          const city = car.address.split(',')[1];
          const country = car.address.split(',')[2];

          return (
            <CardItem key={car.id}>
              <ImgThumb>
                <Img src={car.img } alt={`${car.make} ${car.model}`} />
              {/* <svg></svg> */}
              </ImgThumb>
              
              <CardHeaderThumb>
                <CardHeader>{car.make}    
                  <CardModel>   {car.model}</CardModel>
                  , {car.year}
                </CardHeader>
                <CardHeader>{car.rentalPrice} </CardHeader>
              </CardHeaderThumb>
              <DescriptionThumb>
                <DescriptionWrapper>
                  <Description>{city} </Description>
               </DescriptionWrapper>
                <DescriptionWrapper>
                  <Description>{country} </Description>
               </DescriptionWrapper>
               <DescriptionWrapper>
                  <Description>{car.rentalCompany} </Description>
              </DescriptionWrapper>
              </DescriptionThumb>
              <DescriptionThumb>
                <DescriptionWrapper>
                <Description>{car.type} </Description>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <Description>{car.model} </Description>
                </DescriptionWrapper>
                 <DescriptionWrapper>
                  <Description>{car.id} </Description>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <Description>{car.functionalities[0]} </Description>
                </DescriptionWrapper>
              </DescriptionThumb>
              <LearnMoreBtn type='button' onClick={openModal}>Learn more</LearnMoreBtn>
          {isShowModal && (
				<Modal close={closeModal}>
					<CarCard carInfo={car} city={city}
            country={country}
            close={closeModal} />
				</Modal>
			)}
              
            </CardItem>
            
        )
        })}
           
    </CardList>
      
   )
  )
}

export default CarList