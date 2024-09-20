import React from 'react'
import "./TodomainStyle.css"
import SearchComponent from '../searchComponent/SearchComponent'
import TodoList from '../todoList/TodoList'
import "./TodomainStyle.css"
TodoList
const TodoMain = () => {
  return (
    <div className='todomain'>
      <SearchComponent />
    <TodoList/>
    </div>
  )
}

export default TodoMain