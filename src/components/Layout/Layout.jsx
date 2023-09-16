import RentalCarBtn from 'components/RentalCarBtn/RentalCarBtn';
import React, { Suspense } from 'react'
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
             <header>
          <div>
               <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/catalog'>Catalog</NavLink>
              <NavLink to='/favorites'>Favourite</NavLink>
          </nav>
          <RentalCarBtn />
                </div>
            </header>
            <main>
  <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
            </main>
          
    
      </>
     
  )
}

export default Layout