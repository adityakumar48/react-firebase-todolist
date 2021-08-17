import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import TodoListItem from './Todo'
import "./App.css";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Todo App</h1>
      <form>
        <input
          placeholder="write a Todo"
          style={{ maxWidth: "300px", height: "30px", width: "90vw" }}
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoListItem todo={todo.todo} id={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
