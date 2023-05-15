import { useReducer, useEffect } from 'react'
import { todoReducer  } from '../08-useReducer'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init) 
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch ({ 
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch ({ 
            type: '[TODO] toggle todo',
            payload: id
        })
    }

    const count = todos.length

    const pendingCount = todos.filter(todo => !todo.done).length

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos,
    count,
    pendingCount
  }
}
