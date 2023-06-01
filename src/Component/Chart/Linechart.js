import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const data = [
    {
      time: '12:00',
      value: 54,
    },
    {
      time: '12:10',
      value: 52,
    },
    {
      time: '12:20',
      value: 43,
    },
    {
      time: '12:30',
      value: 39,
    },
    {
      time: '1:00',
      value: 44,
    },
    {
      time: '1:30',
      value: 63,
    },
    {
      time: '2:00',
      value: 30,
    },
    {
      time: '2:30',
      value: 3,
    },
    {
      time: '3:00',
      value: 40,
    },
    {
      time: '3:30',
      value: 61,
    },
    {
      time: '4:00',
      value: 49,
    },
   
    
    {
      time: '5:00',
      value: 61,
    },
    {
      time: '5:30',
      value: 63,
    },
    {
      time: '6:00',
      value: 75,
    },
    {
      time: '6:30',
      value: 77,
    },
    {
      time: '7:00',
      value: 90,
    },
    {
      time: '8:00',
      value: 30,
    },
    {
      time: '9:00',
      value: 63,
    },
    {
      time: '10:00',
      value: 40,
    },
    {
      time: '11:00',
      value: 50,
    },
    {
      time: '11:10',
      value: 40,
    },
    {
      time: '11:20',
      value: 40,
    },
    
  ];
  const config = {
    data,
    padding: 'auto',
    xField: 'time',
    yField: 'value',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
    color: "l(0) 0:#9747FF  1:#14F4C9"
    
    
  };
  return <Line {...config} />;
};

export default DemoLine