import React from 'react'
import { useSelector } from 'react-redux';
import TodoFooter from './TodoFooter';
import TodoItem from './TodoItem';

export default function Todo({todo}) {

  return (
    <div>
      {todo.map(i => (
          <TodoItem key = {i.id} {...i}/>
      ))}
      <TodoFooter todo = {todo} />
    </div>
  )
}
