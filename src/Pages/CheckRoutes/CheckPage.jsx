import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./CheckPage.scss"
import bg from "../../assets/CHEMORO LOGO.png"
import { useCustomMutation } from '../../api/CustomQuery'
import apiurl from "../../api/apiRoutes"
import { Link } from "react-router-dom"
import { formatData, decryptRoutes } from "../../utils/encrypt"


export const CheckPage = () => {
  const { id } = useParams();
  // const { mutation } = useCustomMutation(`${apiurl.companyUser.companyDetails}`)
  // console.log("v", `${apiurl.companyUser.companyDetails}`)
  //  const[companyDetails,setCompanyDetails]=useState({})
  //   const onSuccess = (data) => {
  //     console.log("data12333", data);
  //     setCompanyDetails(data)


  //   }
  console.log("isparam", id)
  const iddata = decryptRoutes(id)
  console.log("id", decryptRoutes(id))
  // console.log("comapnay",companyDetails)
  // useEffect(()=>{
  //   try {
  //     mutation.mutate(formatData({}), { onSuccess })
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // },[])

  return (
    <>
      <div className='check-page-section'>
        <section className='check-page-section1'>
          <img src={bg} alt="" />
          <h3>Welcome To</h3>
          <h3>hhh</h3>
          <h3>Unit 1</h3>
          <p>Pre-Booking Interface</p>
          <p>Please select the type of guest</p>


          <div className='gest-Type-main'>
            <div>
              <Link to="/Visitor" state={decryptRoutes(id)}>

                <h3 >
                  <span>Visitor</span>
                </h3>
                <p>Pre approved Visitor will be required to check-in on arrival</p>
              </Link>
            </div>
            <div>
              <Link >
                <h3>
                  <span>Company Pass</span>
                </h3>
                <p>A pass for Company executives</p>
              </Link >
            </div>
            <div>
              <Link >
                <h3>
                  <span>VIP</span>
                </h3>
                <p>Guest pass will be generated Automatically</p>
              </Link >
            </div>
          </div>
        </section>
      </div>
    </>
  )
}



















