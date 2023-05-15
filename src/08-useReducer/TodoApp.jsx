
import { TodoAdd, TodoList } from '../08-useReducer'
import { useTodos } from '../hooks'

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, count, pendingCount } = useTodos()

  return (
    <>
    <h1>Tasks: { count }, <small>Pending tasks: { pendingCount }</small></h1>
    <hr />
    <h4>
        Click to mark as done
    </h4>
    <div className="row">
        <div className="col-7">
            <TodoList 
                todos={ todos } 
                onDeleteTodo={ handleDeleteTodo }
                onToggleTodo={ handleToggleTodo }
            />
        </div>

        <div className="col-5">
            <h4>Add new TODO</h4>
            <hr />
            <TodoAdd 
                onNewTodo={ handleNewTodo }
            />
        </div>
    </div>
    </>
  )
}
