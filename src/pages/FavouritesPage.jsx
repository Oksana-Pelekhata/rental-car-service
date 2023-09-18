
import CarList from 'components/CarList/CarList'
import { SearchMenu } from 'components/SearchMenu/SearchMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavorites } from 'redux/cars/carsSelectors'

const FavouritesPage = () => {
  const cars = useSelector(selectFavorites)

  
  return (
    <>
            <h1 > My Favorites</h1>
            <SearchMenu />
            <CarList carsList={cars} />
            
      </>
  )
}

export default FavouritesPage