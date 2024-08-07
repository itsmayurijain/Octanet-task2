import React, { useState } from 'react'

export const Edit = ({ editTodo, task }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue("")
    }
    return (
        <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center pl-5'>
                <input type='text' className='outline-none bg-transparent
     border-2 border-gray-300 p-4 w-[300px] text-white mb-8 rounded placeholder:text-white'
                    placeholder='Update Task'
                    onChange={(e) => setValue(e.target.value)} value={value} />
                <button className='bg-slate-500 border-none p-4 text-white cursor-pointer rounded ml-3 mb-8 font-medium'>
                    Update Task
                </button>
            </div>
        </form>
    )
}
