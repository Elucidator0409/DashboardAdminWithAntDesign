import { Menu } from 'antd'
import { ShoppingCartOutlined , ShoppingOutlined , DashboardOutlined, UserOutlined, SmileOutlined  } from '@ant-design/icons';
import React from 'react'

import { useNavigate } from 'react-router-dom';

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu 
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
          label:"Dashboard",
          icon: <DashboardOutlined />,
          key:'/dashboard',
          },

          {
            label:"Users",
            icon: <UserOutlined />,
            key:'/users'
          },

          {
            label:"Customers",
            icon: <SmileOutlined />,
            key:'/customers'
          },

          {
            label:"Product",
            icon: <ShoppingOutlined />,
            key:'/product'
          },

          {
            label:"Orders",
            icon: <ShoppingCartOutlined />,
            key:'/orders'
          },
            
        ]}
      >
        
      </Menu>
    </div>
  )
}

export default SideMenu