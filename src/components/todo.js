import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setisEdit] = useState(false);

 function FormEdit() {

    const [value, setvalue] = useState(item.title)


    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setvalue(value);
    }

    function handleClickUpdateToDO(e) {
        onUpdate(item.id, value);
        setisEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={value}
        ></input>
        <button className="button" onClick={handleClickUpdateToDO}> Update </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={() => setisEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={(e) => onDelete(item.id) }>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
