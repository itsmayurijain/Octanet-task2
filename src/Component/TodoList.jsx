import React, { useState } from 'react'
import { Form } from './Form'

export const TodoList = () => {
    const [todoValue, setValue] = useState();

    const createTodo = todo => {
    
    }
    return (
        <div className='container mx-auto w-[50%]'>
            <div className='bg-slate-400 mt-20 p-8 rounded-md'>
                <Form createTodo ={createTodo}/>
            </div>
        </div>
    )
}
