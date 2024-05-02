import React, { useEffect, useRef, useState } from 'react';
import './Visitor.scss';
import DynamicForm from '../../Components/Dynamic Form/DynamicForm';
import { decryptData, formatDataPlain } from '../../utils/encrypt';
import { useCustomMutation } from '../../api/CustomQuery';
import { useMutation } from '@tanstack/react-query';
import hrmsApi from '../../api/hrmsApi';
import { createSelectOptions } from "../../utils/createSelectOptions"
import { useLocation } from 'react-router-dom';
import { ResultSuccessful } from '../../Components/Notification/ResultSuccessful';

const VisitorLogin = () => {
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [usercompanyList, setUserCompanyList] = useState([])
  const [resultShow,setResultShow]=useState(null)
  const[onsuccesData,setOnSuccesData]=useState(false)
  const location = useLocation()
  console.log("company", location)
  const [companyListOptions, setCompanyListOptions] = useState([])
  const data = [
    { label: 'Upload Image', name: 'uploadImage', type: 'upload' },
    { label: 'Visitor Name', name: 'visitorName', type: 'input' },
    { label: 'Visitor Email', name: 'visitorEmail', type: 'email' },
    {
      label: 'Country Code',
      name: 'countryCode',
      type: 'select',
      options: [
        { value: '1--United States', label: '1--United States' },
        { value: '44--United Kingdom', label: '44--United Kingdom' },
        { value: '91--India', label: '91--India' }
      ]
    },
    { label: 'Visitor Phone No.', name: 'visitorPhoneNo', type: 'number' },
    { label: 'Visit Date', name: 'VisitDate', type: 'date' },
    { label: 'Visit Time', name: 'VisitTime', type: 'time' },
    { label: 'Department', name: 'department', type: 'select', options: departmentOptions, onSelectChnage: true },
    { label: 'User', name: 'departmentUser', type: 'select', options: companyListOptions },
  ];

  const { mutation } = useCustomMutation(`/visitor`);

  const deparmentList = useMutation({

    mutationFn: hrmsApi.getDepartment
  })

  const companyList = useMutation({
    mutationFn: hrmsApi.getCompanyList
  })

  const fetchCompanyList = () => {
    companyList.mutate({ companyId: location.state }, {
      onSuccess: (data) => {
        console.log("comp", decryptData(data.msg));
        setUserCompanyList(decryptData(data.msg))
      }
    })
  }

  const fetchList = () => {
    deparmentList.mutate({ companyId: location.state }, {
      onSuccess: (abc) => {
        console.log("dad", abc);
        console.log("dep", decryptData(abc.msg));
        setDepartmentOptions(createSelectOptions(decryptData(abc.msg), "departmentName", "_id"))
      }
    })
  }
  console.log('departmentOptions', departmentOptions)
  useEffect(() => {

    fetchList()
    fetchCompanyList()

  }, [location])
  const handleData = async (data) => {
    try {
      const Formdata={...data,companyId:location.state}
      await mutation.mutate(formatDataPlain(Formdata), { onSuccess:(data)=>{
        setOnSuccesData(true) 
        setResultShow({
          title:"Requesting Succesfully",
          status:"success",
          subTitle:"Thank you for visiting"

        })
     
      } });
      console.log('Data submitted:', data);
    } catch (error) {
      console.error('Mutation error:', error);
    }
  };



  const onChangeData = (data) => {
    console.log('data', data)
    if (usercompanyList) {
      const mydata = usercompanyList.filter(id => id.department[0] === data)
      console.log("hhhhhhh", usercompanyList.filter(id => id.department[0] === data))
      setCompanyListOptions(createSelectOptions(mydata, "firstName", "_id"))
    }
  }

  console.log("usercompanyList", usercompanyList);
  return (
    <>
    {onsuccesData ?(<ResultSuccessful  resultShow={resultShow} />):(<div className='Visitor'>

<h2 className='vistor-header'><span className='visitor-alph'>V</span>isitor</h2>
<p>Pre-approved Visitors will be required to check-in on arrival</p>


<div className='dynamic-form'>
  <DynamicForm handleData={handleData} data={data} onChangeData={onChangeData} companyId={location.state} />
</div>

</div>)}
    
    </>
  );
};

export default VisitorLogin













// {openClick ? (<div className='Visitor-image-capture'>
// <div className='webcam-container'>
//   <Webcam
//     audio={false}
//     width={250}
//     ref={webcamRef}
//     screenshotFormat="image/jpeg"
//   />
// </div>
// <button className='capture-button' onClick={capturePhoto}>
//   {/* Capture Photo */}
//   <TbHandClick size={25} />
// </button>
// </div>) :

// <div className='capture-icon' onClick={() => setOpenClick(!openClick)}>
//   <div className='capture-tag' >


//     <p className='icons'>    <span><LuImagePlus size={40} /></span> </p>
//     <p>Open Camera</p>

//   </div>

// </div>
// }