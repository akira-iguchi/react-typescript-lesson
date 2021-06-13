import React, { useState } from 'react'
import firebase from "firebase/app"
import { ListItem, TextField, Grid } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { db } from './firebase';

interface PROPS {
  id: string,
  title: string
}

const TaskItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title)

  const editTask = () => {
    db.collection("tasks").doc(props.id).set({title: title, merge: true})
  }
  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete()
  }

  return (
    <ListItem>
      <h2>{props.title}</h2>

      <Grid container justify="flex-end">
        <TextField
          label="edit task"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Grid>
      <button onClick={editTask}>
        <EditOutlinedIcon />
      </button>
      <button onClick={deleteTask}>
        <DeleteOutlineOutlinedIcon />
      </button>
    </ListItem>
  )
}

export default TaskItem
