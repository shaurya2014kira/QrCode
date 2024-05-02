import { useState } from 'react'

import './App.css'
import { HomeLayout } from './Pages/Layout/HomeLayout'
import MainRoute from './Routes/MainRoute'
import { QrGenerateAndDownload } from './Components/Qr-code-Generate/QrGenerateAndDownload'
import { VisitorRequesting } from './Pages/Requesting/VisitorRequesting'
import { PopUp } from './Components/PopUp/PopUp'
import { QrPass } from './Components/QrPass/QrPass'



function App() {


  return (
    <>
      <MainRoute/>
      {/* <QrPass/> */}
      {/* <PopUp/> */}
      {/* <FormData/> */}
      {/* <HomeLayout/> */}
      {/* <QrGenerateAndDownload/> */}
     
      {/* <VisitorRequesting/> */}

    </>
  )
}

export default App
