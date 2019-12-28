import React from 'react'
import { Todo } from './Todo'
import { useFilter } from '../redux/filter'
import { useTodos } from '../redux/todos'

const log = (...a) => {
  console.log(a)
  return a[a.length-1]
}

export const TodoList = () => {
  const todos = useTodos()
  return <ul>
    {todos
      .filter(log('filter',todos,useFilter()))
      .map(todo => <Todo key={todo.id} {...todo} />)}
  </ul>
}