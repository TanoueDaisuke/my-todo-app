import React from "react"

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'



export default function Item({ id, isDone, number, content, deleteTodo, toggleIsDone }) {
  const buttonText = isDone ? "未完了にする" : "完了にする"
  return (
    <>
      <ListItem style={{backgroundColor: "white"}}>
        <ListItemText primary={`${number+1}：${content}`} />
        <Button variant="contained" color={isDone ? "secondary" : "default"} edge="end" onClick={() => toggleIsDone(id)}>{buttonText}</Button>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(id)} >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  )
}