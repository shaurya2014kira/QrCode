import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from "../Pages/Login/Login"

import { QrCode } from '../Pages/Qr/QrCode'
import { HomeLayout } from '../Pages/Layout/HomeLayout'
import { CheckIn } from '../Pages/ChekIn/CheckIn'
import { CheckOut } from '../Pages/Chekout/CheckOut'
import { CheckPage } from '../Pages/CheckRoutes/CheckPage'
import VisitorLogin from '../Pages/Vistor/VisitorLogin'
import { VisitorRequesting } from '../Pages/Requesting/VisitorRequesting'
import { QrPass } from '../Components/QrPass/QrPass'
// import { VisitorLogin } from '../Pages/Vistor/VisitorLogin'
const MainRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/home' element={<HomePge/>} /> */}
        <Route path="/home" element={<HomeLayout />} />
        <Route path='/' element={<Login />} />
        <Route path="/Qr-Codes" element={<QrCode />} />
        <Route path='/Check-Out' element={<CheckOut />} />
        <Route path='/Visitor-Check-In' element={<CheckIn />} />
        <Route path="Check/:id" element={<CheckPage />} />
        <Route path='/Visitor' element={<VisitorLogin />} />
        <Route   path='/request/:id' element={<VisitorRequesting/>}/>
        <Route  path='/QrDownload/:id'element={<QrPass/>}                />
      </Routes>
    </>
  )
}

export default MainRoute
