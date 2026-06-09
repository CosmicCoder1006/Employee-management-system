import react from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from '/FailedTask'
import ComepleteTask from './CompleteTask'

const TaskList=()=>{
    return(
        <div id="task-list" className='overflow-x-auto h-[40%] mt-10 flex items-center justify-start gap-5 flex-nowrap'>
            {data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask></AcceptTask>
                }

                if(elem.newTask){
                    return <NewTask/>
                }

                if(elem.completed){
                    return <ComepleteTask/>
                }

                if(elem.failed){
                    return <FailedTask/>
                }
            })}
        </div>
    )
}

export default TaskList