import React,{useState} from 'react'
import "./TodomainStyle.css"
import SearchComponent from '../searchComponent/SearchComponent'
import TodoList from '../todoList/TodoList'
import "./TodomainStyle.css"
TodoList
const TodoMain = () => {
  const[ searchTodo, setSearchTodo] = useState("")
  return (
    <div className='todomain'>
      <SearchComponent searchTodo={searchTodo} setSearchTodo={ setSearchTodo} />
      <TodoList searchTodo={searchTodo } />
    </div>
  )
}

export default TodoMain