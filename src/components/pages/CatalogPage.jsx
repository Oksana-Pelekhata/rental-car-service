import CarList from 'components/CarList/CarList';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from 'redux/cars/carsOperations';
import { allCars } from 'redux/cars/carsSelectors';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const cars = useSelector(allCars);

    useEffect(() => { dispatch(getAllCars()) }, [dispatch])
    console.log('cars', cars)
  return (
   <CarList carsList={cars}/>
  )
}

export default CatalogPage