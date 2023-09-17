import RentalCarBtn from 'components/RentalCarBtn/RentalCarBtn';
import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import { Header, Link, Navigation } from './Layout.styled';

const Layout = () => {
    return (
        <>
             <Header>
          
               <Navigation>
              <Link to='/'>Home</Link>
              <Link to='/catalog'>Catalog</Link>
              <Link to='/favorites'>Favourite</Link>
          </Navigation>
          <RentalCarBtn />
                
            </Header>
            <main>
  <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
            </main>
          
    
      </>
     
  )
}

export default Layout