import React, { useState } from 'react'

export const CouponForm=({addCouponToListProp}) => {
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    

    

    const addCouponToList = _ => {
        addCouponToListProp({
            id: (new Date).getTime(),
            name,code
        })
    }
    
  return (
    <div>
        <h1>Add Coupon</h1>
       <input type="text" placeholder='Coupon Name' value={name} onChange={
            event => {
                setName(event.target.value)
            }
       }/> 
       <input type="text" placeholder='Code' value={code} onChange={
            event => {
                setCode(event.target.value)
            }
       }/> 
       

       <input type="button" value='Add' onClick= {  addCouponToList} /> <br></br>
       
    </div>
  )
}

