import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

import Form from './Form'
import List from './List'



// この中にcssを書いていく。
//以下の例はdivタグに当てるためのcss
const AppWrapper = styled.div`
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  background-color: skyblue;
  h1 {
    font-size: 50px;
    padding: 30px;
    font-family: 'Bangers', cursive;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

export function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (tmpTodo, setTmpTodo) => {
    const newTodoItem = {
      id: todos.length + 1,
      content: tmpTodo,
      isDone: false
    }
    setTodos(todos.concat(newTodoItem))
    setTmpTodo('')
  }



  // 特定のtodoを除いた新しい配列todosを作成する
  const deleteTodo = id => {
    const newTodos = todos.filter((todo) => {
      // 以下の条件に当てはまるもののみの配列を新たに作成
      return id !== todo.id
    })

    setTodos(newTodos)          
  }

  const toggleIsDone = id => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {        
        todo.isDone = !todo.isDone
      } 
      return todo
    })

    setTodos(newTodos)
  }

  const updateTodo = (id, value) => {
    const updateTodo = {
      id: id,
      content: value
    }
    const updateNewTodos = todos.map(todo => {
      if (todo.id === id) {
        return updateTodo
      } else {
        return todo
      }
    })
    setTodos(updateNewTodos)
  }

  
  return (
    // 定義したAppWrapperをここで使う。
    <>
      <GlobalStyle />
      <AppWrapper>
        <h1>My Todo List</h1>
        <Form addTodo={addTodo} />
        <List todos={todos} deleteTodo={deleteTodo} toggleIsDone={toggleIsDone} updateTodo={updateTodo} />
      </AppWrapper>
    </>
  )
}

