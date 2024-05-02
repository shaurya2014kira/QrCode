import React, { useContext, useEffect, useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { Checkbox, Form, Input ,Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons'; 


import DynamicForm from '../../../Components/Dynamic Form/DynamicForm';
import { AuthContext } from '../../../Context/AuthContext';


const { Step } = Steps;

const StepForm1 = () => {
    const data = [
        { label: 'Company Name', name: 'companyName', type: 'input' },
        { label: 'Comapny Tagline', name: 'companyTagline', type: 'input' },
        { label: 'Company Description', name: 'companyDescription', type: 'textarea' },
        { label: 'Upload Logo', name: 'companyLogo', type: 'upload' },
        { label: 'Admin Name', name: 'adminName', type: 'input' },
        { label: 'Admin Phone.No', name: 'adminPhoneNo', type: 'number' },
        { label: 'Admin Email', name: 'adminEmail', type: 'email' }
    ];
    
    return(
        <DynamicForm data={data}  />
    )
  };
  

const StepForm2 = () => {
    
  
    const data2 = [
        { label: 'Office Details', name: 'officeName'},
        { label: 'Office Country', name: 'officeCountry', type:"select",options:["India", "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor (Timor-Leste)"] },
        { label: 'Office Hour', name: 'OfficeHour', type: 'time' },
        // {label:"How many Office", name:'Office', type:"select",options:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
       
    ];
    return (
      <DynamicForm data={data2}   />
    );
};

// const StepForm3 = () => {
   
//     const data2 = [
//         { label: 'Inventory ', name: 'companyName', type: 'input' },
//         { label: 'Password', name: 'password', type: 'password' },
//         { label: 'Company Description', name: 'companyDescription', type: 'textarea' },
       
       
//     ];
//     return (
//        <DynamicForm data={data2}  />
//     );
// };

const steps = [
    {
        title: 'Company Registration',
        content: <StepForm1  />,
    },
    {
        title: 'Office Information',
        content: <StepForm2 />,
    },
    // {
    //     title: 'Inventory Onboarding',
    //     content: <StepForm3 />,
    // },
];

const FormData = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const {page}=useContext(AuthContext)
    console.log("page",page)

    const next = () => {
        setCurrent(current + 1);
    };

  
    
    const prev = () => {
        setCurrent(current - 1);
    };
    useEffect(() => {
       
        if (page === 1) {
            next();
        }
    }, [page]);

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: "white",
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <div>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{page ===1}</div>
            <div style={{ marginTop: 24 }}>
                {/* {current < steps.length - 1 && (
                    <Button type="primary" onClick={next}>
                        Next
                    </Button>
                )} */}
                {/* {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )} */}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={prev}>
                        Previous
                    </Button>
                )}
            </div>
            {/* {contextHolder} */}
        </div>
    );
};

export default FormData;
