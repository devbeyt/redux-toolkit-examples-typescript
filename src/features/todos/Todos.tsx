import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './todosSlice';
import { AppDispatch,RootState} from '../../app/store';

function Todos() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [todoDescription, setTodoDescription] = useState("");

  const content = todos.map(item=>{
    return<li key={item.id}>{item.description}
    <button onClick={()=>onRemoveTodo(item.id)}>remove</button>
    </li>
  })

  const onRemoveTodo =(id:string)=>{
       dispatch(removeTodo(id))
  }

  const onAddTodo = ()=>{
    dispatch(addTodo(todoDescription))
  }

  return (
    <div>
        <h1>Todos App</h1>
        <input type="text" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)}/>
        <button onClick={onAddTodo}>add todo</button>
        <ul>
          {content}
        </ul>
    </div>
  )
}

export default Todos