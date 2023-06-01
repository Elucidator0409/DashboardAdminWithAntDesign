
import { Avatar, Typography } from 'antd'
import React, { useState, useEffect } from "react";

import { Space, Table, Tag, Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'API';
function Orders() {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])
  
  useEffect(() => {
    setLoading(true)
    getOrders().then(res => {
      setDataSource(res.products);
      setLoading(false);
    })
    
  }, [])
  
  
  return (
    <div>
        <Typography.Title level={4}>Orders</Typography.Title>
        <Space size={(20)}>
          <Table
            loading={loading}
            columns={[
              
              {
                title:"Title",
                dataIndex:"title",
              },
              {
                title:"Price",
                dataIndex:"price",
                render: (value) => <span>${value}</span>,
              },
              {
                title:"DiscountedPrice",
                dataIndex:"discountedPrice",
                render: (value) => <span>${value}</span>,
              },
              {
                title:"Quantity",
                dataIndex:"quantity",
              },
              {
                title:"Total",
                dataIndex:"total",
              },
              
              
              
              
            ]}

            dataSource={dataSource}
            pagination={
              {pageSize:5,}
            }
          ></Table>
        </Space>
    </div>
  )
}

export default Orders