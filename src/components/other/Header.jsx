import React from 'react';
const Header = () => {
    return (
        <div className='flex items-end justify-between p-4 bg-gray-800 text-white'>
            <h1 className='text-2xl font-medium'>Hi <br/><span className='text-3xl font-semibold'>Aditya</span></h1>
            <button>Logout</button>
        </div>
    );
};

export default Header;