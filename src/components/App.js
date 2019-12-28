import React from 'react'
import { Footer } from './Footer'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const App = () =>
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>