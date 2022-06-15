import React from 'react'
import { clearCompleting } from '../store/todoSlicer'
import { useDispatch } from 'react-redux'
import "./Todo.css"

export default function TodoFooter({todo}) {
  const complitedSize = todo.filter(elem => elem.chekend).length
   const dispatch = useDispatch()
  return (
    <div className='todoFooter'>
        <span>{complitedSize}/{todo.length} Completed</span>
        <button onClick={() => dispatch(clearCompleting())}>Clear Complited</button>
    </div>
  )
}
