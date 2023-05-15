import {  useState } from "react";

export const useCounter = ( inititalValue = 1 ) => {
    
    const [counter, setCounter] = useState(inititalValue)

    const increment = ( value = 1 ) => {
        setCounter( counter + value )
    }
    const decrement = ( value = 1 ) => {
        //if(counter === 0 ) return
        setCounter( counter - value )
    }
    const reset = () => {
        setCounter( inititalValue )
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}