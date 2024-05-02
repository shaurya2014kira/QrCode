import React, { useContext } from 'react'
import "./QrCode.scss"
import SideMenu from '../../Components/Sider/SideMenu'
import { Divider } from 'antd'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { InputTag } from '../../Components/Input Tag/InputTag';
import { QrGenerateAndDownload } from '../../Components/Qr-code-Generate/QrGenerateAndDownload';
import { AuthContext } from '../../Context/AuthContext';
export const QrCode = () => {
  const {  setSelectProduct } =useContext(AuthContext)
  const arr = [
    [
        { value: 'Unit-1', label: 'Unit-1',title:"Select-Office" },
       
    ],
    [
        { value: 'Visitor-Check-In', label: 'Visitor Check-In' ,title:"Select-Field" },
        { value: 'Check-Out', label: 'Check Out' },
        { value: 'Invite-Check-In', label: 'Invite Check In' },
    ]
];
const handleChange=(e,index)=>{
  console.log(e,index,"ajfkakdfkjkj");
  if(index ===1){
    setSelectProduct(e)
  }
}
  return (
   <>
   <div className='Qr-Menu'>
      <section className='Qr-div-1'>
            <SideMenu/>
      </section>  


         <section className='Qr-div-2'>
          < div className='section-1'>
            <h1>QR Codes</h1>
            <p>Please select both the office and product name for which you would like to generate the QR code</p>
          </div>
          <div className='section-2'>
            <div className='section-input'>
              <InputTag  data={arr} onchangeTriger={true} customValue={handleChange} />
            </div>
            <div className='section-qr'>
              <QrGenerateAndDownload/>
            </div>

          </div>
                
         </section>
      </div>
    
       
      

   
   
   </>
  )
}
