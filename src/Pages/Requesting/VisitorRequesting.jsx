import React, { useEffect, useState } from 'react'
import "./VisitorRequesting.scss"
import { TiTick } from "react-icons/ti";
import { useParams } from 'react-router-dom';
import { decryptData, decryptRoutes } from '../../utils/encrypt'
import { useMutation } from '@tanstack/react-query';
import hrmsApi from '../../api/hrmsApi';
import { PopUp } from '../../Components/PopUp/PopUp';


export const VisitorRequesting = () => {
    const { id } = useParams()
    const [visitorData,setVisitordata]=useState(null)
    const [flag,setFlag]=useState(false)
    console.log("kjhgfd", decryptRoutes(id))
    const visitorDetailsShow = useMutation({
        mutationFn: hrmsApi.visitorDetails
    })
    const userid = decryptRoutes(id)
    const fetchdata = async () => {
        try {
            visitorDetailsShow.mutate({ userid }, {
                onSuccess: (data) => {
                    console.log("userVisitoe", decryptData(data.data))
                    setVisitordata(decryptData(data.data))
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    const passDetail=useMutation({
        mutationFn:hrmsApi.Visitorpass
    })
    const handleData=(e)=>{
     console.log("e1254",e)
     passDetail.mutate({visitorId:e._id,companyId:e.companyId},{
        onSuccess:(abv)=>{
            console.log(abv)
        }
     })
    }
   
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <><div className='visitor-layout-conatiner'>
         <p className='visitor-request-header'><span className='header-span'>V</span>istor <span className='header-span'>R</span>equesting </p>
            <div className='visitor-request-container'>

                <div className='visitor-layout'>
                    <p className='accept-icon'><TiTick size={100} /></p>
                    <h2>ACCEPT</h2>

                    <h6>knjhgftdsa</h6>
                    <button className='visitor-btn2' onClick={()=>setFlag(!flag)}>Accept</button>
                    {flag &&(<PopUp  data={visitorData}  dataflag={flag} cancelFlag={(e)=>setFlag(!flag)} handleData={handleData}/>)}
                </div>
                <div className='visitor-layout'>
                    <p className='reject-icon'><TiTick size={100} /></p>

                    <h2>Reject</h2>

                    <h6>knjhgftdsa</h6>
                    <button className='visitor-btn3'>Reject</button>
                </div>
                <div className='visitor-layout'>
                    <p className='reschedule-icon'><TiTick size={100} /></p>

                    <h2>Reschedule</h2>

                    <h6>knjhgftdsa</h6>
                    <button className='visitor-btn4'>Reschedule</button>
                </div>
            </div>

            </div>
        </>
    )
}
