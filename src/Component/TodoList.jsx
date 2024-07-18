import React, { useState } from 'react'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { Edit } from './Edit'
uuidv4()


export const TodoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = todo => {
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
    }

    const deleteTodo = id => {
        setTodo(todoValue.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodo(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
   
    const editTask = (task,id) => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
    }
    return (
        <div className='container mx-auto w-[50%]'>
            <div className='bg-gray-400 my-20 p-8 rounded-lg '>
                <h1 className='text-white text-center font-semibold text-2xl pb-6'>Todo-List</h1>
                <Form createTodo={createTodo} />
                {
                    todoValue.map((todo, id) => {
                        return (
                            todo.isEditing ? (
                                <Edit key={id} editTodo={editTask} task={todo}/>
                            )
                                :
                                (
                                    <Todo task={todo} key={id} deleteTodo={deleteTodo} 
                                    editTodo={editTodo}/>
                                )

                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
