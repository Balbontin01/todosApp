import { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10)

    const incrementParent = useCallback(
        (value) => {
            setCounter( (c) => c + value )
    }, [])
    
    useEffect(() => {
      //incrementParent()
    }, [incrementParent])

    // const incrementParent = () => {
    //     setCounter( counter+1 )
    // }

  return (
    <>
    <h1>useCallback Hook: { counter } </h1>
    <hr />

    <ShowIncrement increment={ incrementParent }/>

    </>
  )
}
