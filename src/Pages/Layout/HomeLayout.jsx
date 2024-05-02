import React, { useContext } from 'react'
import "./HomeLayout.scss"
import SideMenu from '../../Components/Sider/SideMenu';
import { QrGenerateAndDownload } from '../../Components/Qr-code-Generate/QrGenerateAndDownload';
import { AuthContext } from '../../Context/AuthContext';

export const HomeLayout = () => {
  const {authUser}=useContext(AuthContext)
  console.log("kljhgf",authUser)

  const data=authUser

  return (
    <>
      <div className='layout'>
       <section className='layout-menu'>
           <SideMenu/>
       </section>
       <section className='layout-menu-2'>
        <div>
        <QrGenerateAndDownload/>
        </div>
        
       </section>

        
      </div>

    </>
  )
}
