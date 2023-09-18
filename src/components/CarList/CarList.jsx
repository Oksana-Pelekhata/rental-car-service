import React, { useState } from 'react'
import { CardItem, CardList, Img, ImgThumb, CardHeader, CardModel, CardHeaderThumb, DescriptionThumb, DescriptionWrapper, Description, LearnMoreBtn, Favourite, Heart, FavoriteHeart } from './CarList.styled';

import CarCard from 'components/CarCard/CarCard';
import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/cars/carsSelectors';
import { addToFavorites, removeFromFavorites } from 'redux/cars/carsSlice';

const CarList = ({ carsList }) => {
  const [isShowModal, setIsShowModal] = useState(false)

	const openModal = () => setIsShowModal(true)

  const closeModal = () => setIsShowModal(false)
  
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log('favorites', favorites)

  const handleClick = async car => {
    // // dispatch(addToFavorites(car));
    // dispatch(removeFromFavorites(car.id));
    try {
    
      if (favorites.some((el) => el.id === car.id)) {

        
          await dispatch(removeFromFavorites(car.id)).unwrap()
      } else {
        await dispatch(addToFavorites(car)).unwrap();
        }

      } catch (error) {
        console.log('error', error)
      }
        
    }
  
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
              
             
              <Favourite
            type="button"
            onClick={() => handleClick(car)}
                >
                  {favorites.some(el => el.id === car.id)
                    ? (<FavoriteHeart />)
                    : (<Heart />)}
            
                </Favourite>
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