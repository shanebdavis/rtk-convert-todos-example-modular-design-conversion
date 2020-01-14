import React from 'react'
import { toggleTodo } from '../redux/todos'

export const Todo = ({ id, text, completed }) =>
  <li
    onClick={() => toggleTodo(id)}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >{text}</li>
