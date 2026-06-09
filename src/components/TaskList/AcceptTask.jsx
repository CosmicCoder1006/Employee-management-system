import react from 'react';

const AcceptTask = ({data})=>{
    return(
        <div className='flex-shrink-0 h-full w-[300px] bg-white rounded-lg pd-5'>
                <div className='flex justify-between items-center mt-5 '>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>

                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-3 text-gray-500'>
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
                </div>
            </div>
    )
}

export default AcceptTask