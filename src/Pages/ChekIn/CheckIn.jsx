import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';

const { Option } = Select; // Destructure Option from Select

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const CheckIn = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="Phone"
        label="Phone No."
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="countryCode"
        label="Country Code"
        rules={[
          {
            required: true,
            message: 'Please select your country code!',
          },
        ]}
      >
        <Select placeholder="Select a country code">
          <Option key="91" value="+91">+91</Option> {/* Add key prop */}
          {/* Add other options as needed */}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
