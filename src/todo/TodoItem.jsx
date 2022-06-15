import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { remove, cheking } from '../store/todoSlicer';
import { useDispatch } from 'react-redux';
import './Todo.css';


export default function TodoItem({id, text, chekend}) {
    const dispatch = useDispatch()

    return (
    <div className='itemBlock'>
        <div className='itemBlockInfo'>
           <input type="checkbox" defaultChecked={chekend} onChange={() => dispatch(cheking({id}))}/>
            <p>{text}</p>
        </div>
       <div>
           <DeleteOutlineIcon  style={{fontSize:"27px", color:"gray"}} onClick={() => dispatch(remove({id}))}/>
       </div>
    </div>
  )
}
