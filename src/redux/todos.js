import { useRedux } from 'hooks-for-redux'

let nextTodoId = 0

export const [
  useTodos,
  { addTodo, toggleTodo, resetTodos },
  todos
] = useRedux('todos', [], {
  addTodo: (todos, text) => [...todos, { text, completed: false, id: nextTodoId++ }],
  resetTodos: () => { nextTodoId = 0; return [] },
  toggleTodo: (todos, id) =>
    todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
})