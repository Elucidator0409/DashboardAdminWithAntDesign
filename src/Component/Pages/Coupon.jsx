import React, { useState } from 'react'
import { Typography,Space, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { CouponForm } from './couponForm/CouponForm';

function Coupons() {
  
  const [dataProduct, setDataProduct] = useState([]);

  
 

  const addCouponToList= product => {
    setDataProduct([...dataProduct, { 
      name: product.name,
      code: product.code }])
    alert(`${product.name} is added to list successfully !`)
  }



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <Space size="middle">
          
          <DeleteOutlined onClick={()=>{
              onDeleteProduct(record)
            }} style={{ color: "red", marginLeft: 12}} />
        </Space>
      ),
    },
    
    
  ];

  const onDeleteProduct=(record)=>{
    setDataProduct(pre=>{
      return pre.filter(product => product.name != record.name)
    })
  }
  
  // const data = () => [
  //   products.map(product => ({
  //     key: product.id,
  //     name: product.name,
  //     quantity: product.quantity,
  //     price: product.price,
      
  //   }))
    
  // ];

    
      
    

    return (
    <div>  
      <Typography.Text>Coupons</Typography.Text>
      
      
      <CouponForm addCouponToListProp={addCouponToList}/>
      <Table columns={columns} dataSource={dataProduct} pagination={{ pageSize:5, }}/>
      
    </div>
  )
}

export default Coupons