import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



export default function Form(props) {

  function addTodo(e) {
    e.preventDefault();

    console.log('実行');
    if (tmpTodo.length > 0) { 
      props.addTodo(tmpTodo, setTmpTodo) 
    }
    // TODO: 空や空欄の場合エラーメッセージを表示する処理
  }

  const [tmpTodo, setTmpTodo] = React.useState("")

  return (
    <>
      <form>
        <TextField 
          type="text" 
          name="desc"
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
          label="タイトル ※必須"
          style={{marginRight: "10px"}}
        />

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          style={{verticalAlign: "bottom"}}
          onClick={(e) => addTodo(e)}
        >
          追加
        </Button>

      </form>
    </>
  )
}