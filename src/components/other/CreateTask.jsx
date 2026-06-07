import React from "react";

const CreateTask=()=>{
    return(
        <div>
                <form className='flex w-full items-start justify-between p-4 mt-4 rounded-md'>
                    <div className='w-1/2 flex flex-col items-start px-3 py-3'>
                        <h3 className='text-lg font-medium mb-2 text-white'>Task Title</h3>
                        <input type='text' placeholder='Enter task title' className='bg-transparent border-[1px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                        <h3 className='text-lg font-medium mb-2'>Date</h3>
                        <input type='date' className='bg-transparent border-[1px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                        <h3 className='text-lg font-medium mb-2'>Assign To</h3>
                        <input type='text' placeholder='Enter employee name' className='bg-transparent border-[1px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                        <h3 className='text-lg font-medium mb-2'>Category</h3>
                        <input type='text' placeholder='design,dev,etc' className='bg-transparent border-[1px] border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                    </div>

                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-lg font-medium mb-2'>Task Description</h3>
                        <textarea clasName='w-full h-44 py-2 px-4 rounded-outline-none bg-transparent border-[1px] border-gray-400 ' name='' id='' cols='50'rows='10' placeholder='Enter task description'></textarea> 
                    </div>

                
                     <button className='bg-blue-600 hover:bg-blue-700 px-2 py-2.5 rounded-md text-white text-lg font-medium mt-4 w-1/2'>Create Task</button>
                </form>
            </div>
    )
};

export default CreateTask