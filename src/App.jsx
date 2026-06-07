import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
function App() {
  return (
   <div className=''>
     {/*<Login />*/}
     {/*<EmployeeDashboard />}*/}
     <AdminDashBoard />
   </div>
  )
}

export default App
