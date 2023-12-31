import React from 'react'
import { CardHeaderThumb, CardHeader, CardModel, ImgThumb, Img, DescriptionThumb, DescriptionWrapper, Description, About, SubTitle, Thumb, ThumbText, Span, Container, CloseModal, CloseIcon, Button, ButtonThumb } from './CarCard.styled';

const CarCard = ({ carInfo, close, city, country }) => {
  
    const rentalConditions = carInfo.rentalConditions.split('\n');
    const ageLimit = rentalConditions[0].split(':');
    const ageRequirement = ageLimit[1];

    const number = carInfo.mileage;
    const locale = 'en-US';
    const formattedNumber = number.toLocaleString(locale);

  return (
      <Container>
          <CloseModal type="button"
        onClick={close}>
        <CloseIcon />
      </CloseModal>
          <ImgThumb>
                <Img src={carInfo.img } alt={`${carInfo.make} ${carInfo.model}`} />
          </ImgThumb>
          
          <CardHeaderThumb>
              <CardHeader>{carInfo.make}    
                  <CardModel>   {carInfo.model}</CardModel>
                  , {carInfo.year}
              </CardHeader>
          </CardHeaderThumb>

          <DescriptionThumb>
                <DescriptionWrapper>
                  <Description>{city} </Description>
               </DescriptionWrapper>
                <DescriptionWrapper>
                  <Description>{country} </Description>
               </DescriptionWrapper>
               <DescriptionWrapper>
                  <Description>id: {carInfo.id}</Description>
              </DescriptionWrapper>
                 <DescriptionWrapper>
                  <Description>Year: {carInfo.year}</Description>
              </DescriptionWrapper>
               <DescriptionWrapper>
                  <Description>Type: {carInfo.type}</Description>
              </DescriptionWrapper>
            </DescriptionThumb>
              
          <DescriptionThumb>
                <DescriptionWrapper>
                <Description>Fuel Consumption:{carInfo.fuelConsumption} </Description>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <Description>Engine Size:{carInfo.engineSize} </Description>
                </DescriptionWrapper>
          </DescriptionThumb>
          
          <About>{carInfo.description}</About>
          <SubTitle>Accessories and functionalities:</SubTitle>
          <DescriptionThumb> {
              carInfo.accessories.map((el, index) => (
                  <DescriptionWrapper key={index}>
                      <Description>
                          {el}
                      </Description>
                 </DescriptionWrapper>
              ))
          }
          </DescriptionThumb>
          
          <DescriptionThumb style={{marginBottom: "19px"}} > {
              carInfo.functionalities.map((el, index) => (
                  <DescriptionWrapper key={index}>
                      <Description>
                          {el}
                      </Description>
                 </DescriptionWrapper>
              ))
          }
          </DescriptionThumb>
          
          <SubTitle>Rental Conditions: </SubTitle>
          <Thumb>
              <ThumbText>Minimum age: <Span>{ageRequirement }</Span></ThumbText>
          </Thumb>
          {
              rentalConditions.map((el, ind) => 
              {
                  if (ind > 0) {
                      return (
                          <Thumb key={ind}>
                              <ThumbText>{el} </ThumbText>
                          </Thumb>
                      )
                  }
              }
              )
          }
          <Thumb>
              <ThumbText>Mileage: <Span>{formattedNumber} </Span></ThumbText>
          </Thumb>
           <Thumb>
              <ThumbText>Price: <Span>{carInfo.rentalPrice} </Span></ThumbText>
          </Thumb>
          <ButtonThumb>
            <Button href="tel:+380730000000">Rental car</Button>
      </ButtonThumb>
    </Container>
  )
}

export default CarCard