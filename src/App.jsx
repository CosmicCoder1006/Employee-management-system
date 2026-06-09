import React, { useContext } from 'react'
import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'
function App() {
  const [user,setUser]= useState(null);
  const authData = useContext(AuthContext)
  
    useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
     setUser(loggedInUser.role);
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }
  return (
   <>
     {!user ? <Login handleLogin={handleLogin}/>:""}
     {user=='admin'? <AdminDashBoard/>:<EmployeeDashboard/>}
   </>
  )
}

export default App
