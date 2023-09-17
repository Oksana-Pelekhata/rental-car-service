import CarList from 'components/CarList/CarList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { SearchMenu } from 'components/SearchMenu/SearchMenu';
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
        <>
            <h1 className="visually-hidden">Catalog</h1>
            <SearchMenu />
            <CarList carsList={cars} />
            <LoadMoreBtn />
      </>
   
  )
}

export default CatalogPage