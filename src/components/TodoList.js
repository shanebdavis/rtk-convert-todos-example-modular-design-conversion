import React from 'react'
import { Todo } from './Todo'
import { useFilter } from '../redux/filter'
import { useTodos } from '../redux/todos'

export const TodoList = () =>
  <ul>
    {useTodos()
      .filter(useFilter())
      .map(todo => <Todo key={todo.id} {...todo} />)}
  </ul>
