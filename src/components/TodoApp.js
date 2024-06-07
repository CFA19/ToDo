import { useState } from "react";
import Todo from "./todo";

import "./TodoApp.css"

export default function TodoApp() {
  const [title, setTitle] = useState("Carlos");
  const [todos, setTodos] = useState([]);

  //   function handleClick(e) {
  //     e.preventDefault();
  //     setTitle("CFA");
  //   }

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTitle('');
  }


  function handleUpdate(id, value) {

    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id, value) {

    const temp = todos.filter(item => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          className="buttonCreate"
          type="submit"
          value="Create TODO"
        />
      </form>

      <div className="todosContainer">
        {/* funciona como un cliclo for el map  OJOOO agregar el key*/}

        {todos.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}
