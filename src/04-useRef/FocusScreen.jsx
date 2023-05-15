import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClickBtn = () => {
        //document.querySelector('input').select();
        inputRef.current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr/>
        
        <input 
            ref={ inputRef }
            className="form-control mt-2"
            type="text"
            placeholder="Ingresa tu nombre"
        />

         <input 
            className="form-control mt-2"
            type="text"
            placeholder="Ingresa tu nombre"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClickBtn }>
                Set Focus
            </button>

    </>    
    )
}
