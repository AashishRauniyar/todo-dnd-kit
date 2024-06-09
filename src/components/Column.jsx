
import React from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task/Task'
const Column = ({ tasks }) => {
  return <div className=' bg-gray-200 border-2 p-3 w-[80%] flex flex-col m-auto gap-5 max-w-[500px]'>
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>

    {tasks.map((task) => (
        <Task id={task.id} title={task.title} key={task.id}/>
    ))}
    </SortableContext>
  </div>
  
}

export default Column