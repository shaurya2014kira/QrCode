import React from 'react';
import { Button, Form, Input, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TimePicker } from 'antd';
import './DynamicForm.scss'; // Import custom CSS for styling

const DynamicForm = ({ data, handleData, onChangeData ,companyId}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form.resetFields();
    handleData(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChangemy = (value) => {
    console.log("Value changed:", value);
    onChangeData(value);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log("eeee",e && e.fileList)
    return e && e.fileList;
  };

  const getExtraData = (file) => ({
    fileUidName: file.uid,
    companyId: companyId
  });

  return (
    <div className="dynamic-form-container">
      <Form
        form={form}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {data.map((item, index) => (
          <Form.Item
            key={index}
            label={item.label}
            name={item.name}
            valuePropName={item.type === 'upload' ? 'fileList' : undefined}
            getValueFromEvent={item.type === 'upload' ? normFile : undefined}
            rules={[
              {
                required: true,
                message: `Please input your ${item.label.toLowerCase()}!`,
              },
            ]}
          >
            {item.type === 'number' && <Input type='number' />}
            {item.type === 'input' && <Input />}
            {item.type === 'date' && <Input type='date' />}
            {item.type === 'password' && <Input.Password />}
            {item.type === 'textarea' && <Input.TextArea />}
            {item.type === 'email' && <Input type="email" />}
            {item.type === 'select' && (
              <Select onChange={(e) => {
                if (item.onSelectChnage) {
                  onChangemy(e)
                }
              }} options={item.options} />
            )}
            {item.type === 'time' && <TimePicker style={{ width: '100%' }} />}
            {item.type === 'upload' && (
              <Upload
              className='uploadimage'
                name='uploadImage'
                action="http://192.168.1.9:3000/api/v1/image"
                listType="picture-card"
                maxCount={1}
                data={getExtraData}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            )}
          </Form.Item>
        ))}
        <Form.Item wrapperCol={{ offset: 10, span: 8 }}>
          <Button type="primary" htmlType="submit" className='btn'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DynamicForm;
