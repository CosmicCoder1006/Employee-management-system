import react from 'react'

const TaskListNumber = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[35%] bg-red-400 py-6 px-9 rounded-xl'>
                <h2 className=' text-white text-3xl font-semibold py-2'>{data.taskCounts.newTask}</h2>
                <h3 className ='text-white text-xl font-medium py-6'>New Task</h3>
            </div>

            <div className='w-[35%] bg-blue-400 py-6 px-9 rounded-xl'>
                <h2 className=' text-white text-3xl font-semibold py-2'>{data.taskCounts.completed}</h2>
                <h3 className ='text-white text-xl font-medium py-6'>Completed Task</h3>
            </div>


            <div className='w-[35%] bg-green-400 py-6 px-9 rounded-xl'>
                <h2 className=' text-white text-3xl font-semibold py-2'>{data.taskCounts.active}</h2>
                <h3 className ='text-white text-xl font-medium py-6'>Accepted Task</h3>
            </div>

            <div className='w-[35%] bg-yellow-400 py-6 px-9 rounded-xl'>
                <h2 className=' text-white text-3xl font-semibold py-2'>{data.taskCounts.failed}</h2>
                <h3 className ='text-white text-xl font-medium py-6'>Failed Task</h3>
            </div>
        </div>

        
    )
}
export default TaskListNumber