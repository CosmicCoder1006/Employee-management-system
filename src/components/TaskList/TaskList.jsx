import react from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from '/FailedTask'
import CompleteTask from './CompleteTask'

const TaskList=({data})=>{
    return(
        <div id="task-list" className='overflow-x-auto h-[40%] mt-10 flex items-center justify-start gap-5 flex-nowrap'>
            {data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
                }

                if(elem.newTask){
                    return <NewTask key={idx} data={elem}/>
                }

                if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
                }

                if(elem.failed){
                    return <FailedTask key={idx} data={elem}/>
                }
            })}
        </div>
    )
}

export default TaskList