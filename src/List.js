import React from 'react'
import styled from 'styled-components'

import Item from './Item'


export default function List({todos, deleteTodo, toggleIsDone, updateTodo}) {
  // mapの第二引数はインデックスを受け取ることができる
  const Items = todos.map((todo, i) => (
    <Item
      // keyをつけないとエラーに近い警告メッセージが出る
      // 何番目の要素なのかわかりやすくするため
      key={todo.id}
      id={todo.id}
      isDone={todo.isDone}
      number={i} // 番号を付ける用
      content={todo.content}
      deleteTodo={deleteTodo}
      toggleIsDone={toggleIsDone}
      updateTodo={updateTodo}
    />
  )) 

  const ItemWrapper = styled.ul`
    width: 60%;
    @media screen and (max-width:480px) {
      width: 90%;
    }
    margin: 15px auto;
    text-align: center;
  `
  

  return (
    <>
      {/* {Items.length > 0 && <Divider style={{ height: "5px", width: "60%", backgroundColor: "blue", margin: "10px auto 20px" }} />} */}
      {/* ↑いらない説 */}
      
      <ItemWrapper>
        {/* つまりItemsは以下のような構造のはず。しかしエラーになる。配列にするなってエラー */}
        {/* {<Items id={1} content={"hogehgoe"} />, <Items id={1} content={"hogehgoe"} />} */}
        {Items}
      </ItemWrapper>
    </>
  )
}