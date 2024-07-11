import React, { useState } from 'react'

export const Form = () => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(value);
        setValue("")
    }
    return (
        <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center'>
                <input type='text' className='outline-none bg-transparent
     border-2 border-gray-300 p-4 w-[300px] text-white mb-8 rounded placeholder:text-white'
                    placeholder='What task do you have today?'
                    onChange={(e) => setValue(e.target.value)} />
                <button className='bg-slate-500 border-none p-4 text-white cursor-pointer rounded ml-3 mb-8 font-medium'>
                    Add Task
                </button>
            </div>
        </form>
    )
}
