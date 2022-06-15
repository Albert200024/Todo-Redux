import { useEffect, useState } from 'react';
import './App.css';
import './todo/Todo.css'
import { add } from './store/todoSlicer';
import { useDispatch, useSelector} from 'react-redux';
import Todo from './todo/Todo';

function App() {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const {todos} = useSelector((state) => state)
 
  useEffect(() => {
    if(!localStorage.hasOwnProperty('todo')){
       localStorage.setItem('todo', JSON.stringify([]))
    } 
  }, []) 

  useEffect(() => {
     localStorage.setItem('todo', JSON.stringify(todos.todos))
  }, [todos.todos])

  function addTodo(value){
    dispatch(add({value}))
    setValue("")
  }

  return (
    <div className="App">
      <div className='Todo'> 
         <div className='todoAddForm'>
            <input type="text" value={value}
             onChange={(event) => setValue(event.target.value)}/>
            <button className = "add" onClick={() => addTodo(value)}>ADD</button>
         </div>
          <Todo todo = {todos.todos} />
      </div> 
    </div>
  );
}

export default App;
