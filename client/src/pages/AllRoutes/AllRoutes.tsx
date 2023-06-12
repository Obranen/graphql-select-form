import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from '../../components/Home/Home'
import MaterialUi from '../../components/MaterialUi/MaterialUi'
import NotFound from '../../components/NotFound/NotFound'
import Reviews from '../../components/Reviews/Reviews'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/mui'} element={<MaterialUi/>}/>
      <Route path={'/reviews'} element={<Reviews/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes