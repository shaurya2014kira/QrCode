import React from 'react';
import { Button, Result } from 'antd';

export const ResultSuccessful = (resultShow) => {
    console.log('result',resultShow)
  return (
   
    <Result
    status={resultShow.resultShow.status}
    title={resultShow.resultShow.title}
    subTitle={resultShow.resultShow.subTitle}
    // extra={[
    //   <Button type="primary" key="console">
    //     Go Console
    //   </Button>,
    //   <Button key="buy">Buy Again</Button>,
    // ]}
  />
  )
}
