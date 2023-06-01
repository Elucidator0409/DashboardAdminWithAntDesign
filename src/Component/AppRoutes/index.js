import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Dashboard from 'Component/Pages/Dashboard'
import Users from 'Component/Pages/Users'
import Customers from 'Component/Pages/Customers'
import Products from 'Component/Pages/Products'
import Orders from 'Component/Pages/Orders'
import Coupons from 'Component/Pages/Coupon'
function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/coupons" element={<Coupons />}></Route>
      </Routes>
    
  )
}

export default AppRoutes