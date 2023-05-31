import React, { useState,useEffect } from 'react'
import { Space, Typography, Card, Statistic, Table } from 'antd'
import { ShoppingCartOutlined,ShoppingOutlined,UserOutlined } from '@ant-design/icons'
import DemoLine from 'Component/Chart/Linechart'
import DemoMix from 'Component/Chart/Multiview'
import styled from 'styled-components'
import { getOrders } from 'API'

const StyledDiv = styled.div `
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .content {
    margin-left: 20px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }
`

function Dashboard() {
  return (
    <StyledDiv>  
      <div className='content'>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space>
          <Card>
            <Space>
              <UserOutlined
              style={{ color: "purple",
                backgroundColor: "rgba(0,255,255,0.25",
                borderRadius:20,
                fontSize: 24
              }}
              ></UserOutlined>
              <Statistic title="Users" value={1}></Statistic>
            </Space>
          </Card>
          <Card>
            <Space>
              <ShoppingOutlined
                style={{ color: "red",
                backgroundColor: "rgba(255,0,0,0.25",
                borderRadius:20,
                fontSize: 24
              }}
              ></ShoppingOutlined>
              <Statistic title="Products" value={100}></Statistic>
            </Space>
          </Card>
          <Card>
            <Space> 
              <ShoppingCartOutlined 
                style={{ color: "green",
                backgroundColor: "rgba(0,255,0,0.25",
                borderRadius:20,
                fontSize: 24
              }}
              >

              </ShoppingCartOutlined>
              <Statistic title="Orders" value={4}></Statistic>
            </Space>
          </Card>
        </Space>
        <Space>
          <RecentOrders />
        </Space>
        
        </div>
      
        
    </StyledDiv>
  )
}

function RecentOrders() {

  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
  
    getOrders().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, [])
  

  return <Table
    columns={[
      {
      title:'Title',
      dataIndex:"title",
      },
      {
      title:'Quantity',
      dataIndex:"quantity",
      },
      {
        title:'Price',
        dataIndex:"discountedPrice",
      },
    ]}
    loading={loading}
    dataSource={dataSource}
  ></Table>
}

export default Dashboard