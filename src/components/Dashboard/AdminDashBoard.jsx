import react from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask';
const AdminDashBoard=()=>{
    return(
        <div className='h-screen w-full p-10'>
            <Header />
            <CreateTask/>
            
        </div>
    )
};

export default AdminDashBoard