import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "../firebase";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("What do you want to do today?");
  const [todos, setTodos] = useState([]);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
        const docRef = await addDoc(collection(db, "todos"), {
            todo: todo,
        });
        console.log("Document written with ID: ", docRef.id);

        // update local state of todos with the new todo
        setTodos([...todos, { todo: todo }]);
        setTodo("");
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
  };

  // get data from firestore
  async function fetchPost() {
    const todosCol = collection(db, "todos");
    const todosSnapshot = await getDocs(todosCol);
    const todosList = todosSnapshot.docs.map(doc => doc.data());
    setTodos(todosList);
    // console.log(todosList);
    console.log(todos);
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Todo-App</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo.todo}</li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Todo;
