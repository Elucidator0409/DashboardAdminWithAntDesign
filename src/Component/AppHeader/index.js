import React from 'react'
import { BellFilled, MailOutlined } from "@ant-design/icons"
import { Badge, Image, Space, Typography } from "antd"
import Logo from "Assests/logo.png"
function AppHeader() {
  return (
    <div className='AppHeader'>
      <Image width="70px" src={Logo} />
      <Typography.Title>Elucidator's Dashboard</Typography.Title>
      <Space>
        <Badge dot>
          <MailOutlined style={{ fontSize: 24 }}/>
        </Badge>
        <Badge count={11}>
          <BellFilled style={{ fontSize: 24 }}/>
        </Badge>
        
      </Space>
    </div>
  )
}

export default AppHeader