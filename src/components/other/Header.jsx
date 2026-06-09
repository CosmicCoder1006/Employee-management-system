import React from 'react';
const Header = ({data}) => {
    return (
        <div className='flex items-end justify-between p-4  text-white bg-black-600'>
            <h1 className='text-2xl font-medium'>Hi <br/><span className='text-3xl font-semibold'>{data.firstName}</span></h1>
            <button className='bg-red-600 hover:bg-red-700 px-2 py-2.5 rounded-md text-white text-lg font-medium'>Logout</button>
        </div>
    );
};

export default Header;