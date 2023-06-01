import React, { useState } from 'react'

export const ProductForm=({addProductToListProp}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    

    

    const addProductToList = _ => {
        addProductToListProp({
            id: (new Date).getTime(),
            name,quantity,price
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
       
    </div>
  )
}

