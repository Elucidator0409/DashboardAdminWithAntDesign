import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Typography,Table, Button, Modal, Input } from 'antd'
import React, { useState } from 'react'

function Customers() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null)

  const [isAdding, setIsAdding] = useState(false);
  const [addingCustomer, setAddingCustomer] = useState(null)

  const [dataSource, setDataSource] = useState([
    {
      id:1,
      name:'John',
      email:'john@gmail.com',
      address:'john Address'
    },
    {
      id:2,
      name:'Elu',
      email:'soidevuong99@gmail.com',
      address:'elu Address'
    },
    {
      id:3,
      name:'John1',
      email:'john1@gmail.com',
      address:'john1 Address'
    },
    {
      id:2,
      name:'Elu2',
      email:'soidevuong99@gmail.com',
      address:'elu2 Address'
    }
  ])
  const columns =[
    {
      key:'1',
      title:'ID',
      dataIndex:'id'
    },
    {
      key:'2',
      title:'Name',
      dataIndex:'name'
    },
    {
      key:'3',
      title:'Email',
      dataIndex:'email'
    },
    {
      key:'4',
      title:'Address',
      dataIndex:'address'
    },
    {
      key:'5',
      title:'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={()=>{
              editCustomer(record)
            }}/>
            <DeleteOutlined onClick={()=>{
              onDeleteCustomer(record)
            }} style={{ color: "red", marginLeft: 12}} />
          </>
        )
      },
    },

  ];

  const onAddCustomer=()=>{
    const randomNumber = parseInt(Math.random()*1000)
    const newCustomer = {
      id: randomNumber,
      name: "Name "+ randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address "+ randomNumber,
    }
    setDataSource((pre)=>{
      return [...pre, newCustomer]
    })
  }

  const onDeleteCustomer=(record)=>{
    Modal.confirm({
      title:'Are you sure to delete this customer ?',
      okText:"Yes",
      okType:"danger",
      onOk: ()=>{
        setDataSource(pre=>{
          return pre.filter(customer => customer.id != record.id)
        });
      },
    });
    
  };

  const editCustomer=(record)=>{
    setIsEditing(true);
    setEditingCustomer({...record})
  };

  const addCustomer =(data)=>{
    setIsAdding(true);
    setAddingCustomer({...data})
  };

  const resetEditing=() => {
    setIsEditing(false);
    setEditingCustomer(null);
  }

  const resetAdding=() => {
    setIsAdding(false);
    setAddingCustomer(null);
  }

  return (
    <div>
      <Typography.Title >Customers</Typography.Title>
      <Button onClick={()=>{addCustomer(dataSource)}}>Add new customer</Button>
      <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize:5 }}
      >

      </Table>
      <Modal
        title="Edit Customer"
        visible={isAdding}
        okText="Save"
        onCancel={() => {
          resetAdding()
        }}
        onOk={() => {
          setDataSource([ ...dataSource,addingCustomer])
          resetAdding()
        }}
      >
        <Input 
          placeholder='Enter ID'
          value={addingCustomer?.id}
          onChange={(e)=>{
            setAddingCustomer((pre) => {
              return { ...pre,id:e.target.value}
            })
          }}
        />
        <Input 
          placeholder='Enter name'
          value={addingCustomer?.name}
          onChange={(e)=>{
            setAddingCustomer((pre) => {
              return { ...pre,name:e.target.value}
            })
          }}
        />

        <Input 
        placeholder='Enter Email'
          value={addingCustomer?.email}
          onChange={(e)=>{
            setAddingCustomer((pre) => {
              return { ...pre,email:e.target.value}
            })
          }}
        />

        <Input 
          placeholder='Enter Address'
          value={addingCustomer?.address}
          onChange={(e)=>{
            setAddingCustomer((pre) => {
              return { ...pre,address:e.target.value}
            })
          }}
        />
      </Modal>


      <Modal
        title="Edit Customer"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing()
        }}
        onOk={() => {
          setDataSource(pre => {
            return pre.map(customer => {
              if(customer.id === editingCustomer.id) {
                return editingCustomer
              } else {
                return customer;
              }
            })
          })
          resetEditing()
        }}
      >
        <Input 
          placeholder='Edit name'
          value={editingCustomer?.name}
          onChange={(e)=>{
            setEditingCustomer((pre) => {
              return { ...pre,name:e.target.value}
            })
          }}
        />

        <Input 
          placeholder='Edit email'
          value={editingCustomer?.email}
          onChange={(e)=>{
            setEditingCustomer((pre) => {
              return { ...pre,email:e.target.value}
            })
          }}
        />

        <Input 
          placeholder='Edit address'
          value={editingCustomer?.address}
          onChange={(e)=>{
            setEditingCustomer((pre) => {
              return { ...pre,address:e.target.value}
            })
          }}
        />
      </Modal>
    </div>
  )
}

export default Customers