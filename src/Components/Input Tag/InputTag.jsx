import React from 'react'
import { Select} from 'antd';
import "./Input.scss"
export const InputTag = ({ data, onchangeTriger, customValue}) => {

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const onChange = (value, index) => {
        console.log(`selected ${value}`);
        if (onchangeTriger) {
            customValue(value, index)
            // customValuesss(value, index)
           
        }
       
    };
    return (
        <>
            {data.map((options, idx) => (
                <div key={idx} className='input-tag'>
                    <label >{options[0].title}</label>
                    <Select
                        className='select-tag'
                      
                       
                        placeholder={options[0].title}
                        optionFilterProp="items"
                        onChange={(e) => onChange(e, idx)}

                        filterOption={filterOption}
                        options={options}


                    />
                </div>
            ))}
        </>
    );
};
