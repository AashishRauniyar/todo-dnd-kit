import React, { useState } from 'react'

const Input = ({onSubmit}) => {

    const [input,setInput]= useState('')

    const handleSubmit = () =>{
        if(!input) return

        onSubmit(input)

        setInput('')

    }
  return (
    <div className='flex flex-cols'>
        <input  type='text' value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 border-gray-300 p-2 w-[80%] m-auto block'/>
        <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 m-2'>Add Task</button>
    </div>
  )
}

export default Input