import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavouritesPage from '../pages/FavouritesPage';

export const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage /> } />
        <Route path='/favorites' element={<FavouritesPage />} />
      </Route>
        </Routes>

  );
};
