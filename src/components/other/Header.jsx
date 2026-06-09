import React, { useState } from 'react';
const Header = ({data}) => {
    //const [username,setUsername]= useState('');
    
    //if(!data){
        //setUsername('Admin')
    //}
   // else{
        //setUsername(data.firstName);
    //}

    
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    //props.changeUser('')
    window.location.reload()
  }

    return (
        <div className='flex items-end justify-between p-4  text-white bg-black-600'>
            <h1 className='text-2xl font-medium'>Hi <br/><span className='text-3xl font-semibold'>{username}</span></h1>
            <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 px-2 py-2.5 rounded-md text-white text-lg font-medium'>Logout</button>
        </div>
    );
};

export default Header;