import React, { useState } from 'react'

export const ProductForm=({addProductProp,addProductToListProp,removeItemProp}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [itemRemoved, setItemRemoved] = useState('')

    const addProduct = _ => {
        addProductProp({
            id: (new Date).getTime(),
            name,quantity,price
        })
        setName('');
        setPrice('');
        setQuantity('');
    }

    const addProductToList = _ => {
        addProductToListProp({
            id: (new Date).getTime(),
            name,quantity,price
        })
    }
    const removeItem = _ => {
        removeItemProp({
            itemRemoved
        })
            
    }

  return (
    <div>
        <h1>Add Product</h1>
       <input type="text" placeholder='Product Name' value={name} onChange={
            event => {
                setName(event.target.value)
            }
       }/> 
       <input type="text" placeholder='Quantity' value={quantity} onChange={
            event => {
                setQuantity(event.target.value)
            }
       }/> 
       <input type="text" placeholder='Price' value={price} onChange={
            event => {
                setPrice(event.target.value)
            }
       }/> 

       <input type="button" value='Add' onClick= {  addProductToList} /> <br></br>
       {/* <input type='text' placeholder="Enter name of product:" value={itemRemoved} onChange={
            event => {
                setItemRemoved(event.target.value)
            }
       }
       
       ></input>
       <input type="button" value='Delete' onClick= {  removeItem } /> */}
    </div>
  )
}

