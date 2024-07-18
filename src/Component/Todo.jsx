import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill} from 'react-icons/bs'

export const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <div>
        <div className='flex justify-between items-center bg-slate-500 text-white rounded-md mb-2 cursor-pointer px-4 py-3'>
          <p className='font-primary'> {task.task}</p>
          <div className='flex items-center gap-x-4'>
            <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
            <BsFillTrashFill className='text-xl' onClick={() => deleteTodo(task.id)}/>
          </div>
        </div>
    </div>
  )
}
