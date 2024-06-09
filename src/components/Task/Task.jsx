import React from 'react'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
const Task = ({id, title}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style ={
        transform: CSS.Transform.toString(transform),
        transition,
    }
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='bg-white p-3 border border-slate-300 shadow-sm touch-none'>
        <input type='checkbox' className='mr-2' />
        {title}</div>
  )
}

export default Task