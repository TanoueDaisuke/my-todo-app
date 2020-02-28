import React from "react"

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


export default function Item({ id, isDone, number, content, deleteTodo, toggleIsDone, updateTodo }) {
  const [isEdit, setIsEdit] = React.useState(false)

  const buttonText = isDone ? "未完了にする" : "完了にする"

  const contentText = () => {
    if (isEdit) {
      const handleClick = () => {
        const input = document.getElementById('outlined-basic')
        updateTodo(id, input.value)
        setIsEdit(false)
      }
      return (
        <>
          <TextField id="outlined-basic" label={content} variant="outlined" style={{width: "65%", marginRight: 5}} />
          <Button color="primary" variant="contained" onClick={handleClick}>保存</Button>
        </>
      )
    } else {
      return (
        <>
          <ListItemText primary={`${number+1}：${content}`} />
          <IconButton 
            edge="end" 
            aria-label="delete" 
            style={{marginRight: 5}}  
            onClick={() => setIsEdit(true)}
          >
            <EditIcon />
          </IconButton>
        </>
      )
    }
  }

  
  return (
    <>
      <ListItem style={{backgroundColor: "white"}}>
        {contentText()}
        <Button 
          variant="contained" 
          color={isDone ? "secondary" : "default"} 
          edge="end" 
          style={{display: isEdit ? "none" : "block", fontSize: 11}}
          onClick={() => toggleIsDone(id)}
        >
          {buttonText}
        </Button>
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(id)} >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  )
}