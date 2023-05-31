import React, { useState, useEffect } from 'react'
import { Typography,Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import  { ProductForm } from "Component/Pages/productForm/ProductForm"
import ProductListItem from './productListItem/ProductListItem';
function Products() {
  
  const [dataProduct, setDataProduct] = useState([]);

  
  const addProductToList= product => {
    setDataProduct([...dataProduct, { 
      name: product.name,
      quantity: product.quantity,
      price: product.price, }])
    alert(`${product.name} is added to list successfully !`)
  }

  const removeProduct = productName => {
    setDataProduct((dataProduct) => dataProduct.filter((item) => item.name !== productName.itemRemoved)

    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
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
      <Typography.Text>Products</Typography.Text>
      
      <ProductForm   addProductToListProp={addProductToList} /*removeItemProp={removeProduct}*/ />
      
      <Table columns={columns} dataSource={dataProduct} pagination={{ pageSize:5, }}/>
      {/* { 
        products.map(product => <ProductListItem key={ product.id }
                                  item= { products }
                                  deleteProductProp = {deleteProduct}
                                  />)
      } */}
    </div>
  )
}

export default Products