import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
//import ReactDOM from 'react-dom/client'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

const root = createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
) //new method to render components using React 18

//ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
//    <MultipleCustomHooks />
//  </React.StrictMode>,
//)  this was the old method to render a component
