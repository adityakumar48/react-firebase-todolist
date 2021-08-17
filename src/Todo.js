import React from 'react'
import { db } from './firebaseConfig'
export default function TodoListItem({todo,id}) {

    function deleteTodo(){
        db.collection('todos').doc(id).delete()
    }

    return (
        <div style={{ display: 'flex', margin:5 }}>
             <li >{todo}</li>
             <button onClick={deleteTodo} style={{marginLeft:10}}>X</button>
        </div>
    )
}
