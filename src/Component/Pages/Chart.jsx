import DemoLine from 'Component/Chart/Linechart'
import { Space, Typography } from 'antd'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ApexChart from 'Component/Chart/RadialBarChart';

function Chart() {
  return (
    <div>
        <Typography.Title level={5}>Token Price</Typography.Title>
        <Space>
            
            <DemoLine></DemoLine>
            
        </Space>
        <ApexChart />
    </div>
  )
}

export default Chart