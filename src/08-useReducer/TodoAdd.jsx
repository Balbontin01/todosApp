import { useForm } from '../hooks';


export const TodoAdd = ({ onNewTodo }) => {
    
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        
        event.preventDefault()

        if( description.length <= 1 ) return

        const newTodo = {
                id: new Date().getTime(),
                description: description,
                done: false
        }

        onNewTodo(newTodo)
        onResetForm()
    }
    

  return (
    <form onSubmit={ onFormSubmit }>
        <input
            type="text"
            placeholder="Description"
            className="form-control"
            value={ description }
            name="description"
            onChange={ onInputChange }
        />

        <button 
            type="submit"
            className='btn btn-outline-primary mt-3'
        >
            Add
        </button>
    </form>
  )
}
