import React, { useState } from 'react'
import { addTodo } from '../redux/todos'

export const AddTodo = () => {
  const [todoText, setTodoText] = useState('')

  return <div>
    <form
      onSubmit={e => {
        e.preventDefault()
        if (todoText.trim()) {
          addTodo(todoText)
          setTodoText('')
        }
      }}
    >
      <input value={todoText} onChange={e => setTodoText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  </div>
}