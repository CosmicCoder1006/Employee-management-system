import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
function App() {
  return (
   <div className=''>
     {/*<Login />*/}
     <EmployeeDashboard />
   </div>
  )
}

export default App
