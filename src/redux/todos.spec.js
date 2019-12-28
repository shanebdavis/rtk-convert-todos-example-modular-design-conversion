import { addTodo, toggleTodo, resetTodos, todos } from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos.getState()).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    resetTodos()
    addTodo("Run the tests")
    expect(todos.getState()).toEqual([
      { id: 0, text: 'Run the tests', completed: false }
    ])
    addTodo("Use Redux")
    expect(todos.getState()).toEqual([
      { id: 0, text: 'Run the tests', completed: false },
      { id: 1, text: 'Use Redux', completed: false }
    ])

    addTodo("Fix the tests")
    expect(todos.getState()).toEqual([
      { id: 0, text: 'Run the tests', completed: false },
      { id: 1, text: 'Use Redux', completed: false },
      { id: 2, text: 'Fix the tests', completed: false }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    resetTodos()
    addTodo("Run the tests")
    addTodo("Use Redux")
    toggleTodo(1)

    expect(todos.getState()).toEqual([
      { id: 0, text: 'Run the tests', completed: false },
      { id: 1, text: 'Use Redux', completed: true }
    ])
  })
})

describe('addTodo', () => {
  it('should generate incrementing todo IDs', () => {
    resetTodos()
    const action1 = addTodo('a')
    const action2 = addTodo('b')

    expect(action1.payload).toEqual( 'a' )
    expect(action2.payload).toEqual( 'b' )
  })
})
