import React, { useState } from "react";
import "./App2.css";

function App2() {
  return (
    <div>
      <Todo />
    </div>
  );
}

const Todo = () => {
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, content: "리액트" },
    { id: 2, content: "리액트를 시작하자" },
  ]);

  const onClickHandler = () => {
    let newTodo = {
      id: todo.length + 1,
      content: content,
    };
    setTodo([...todo, newTodo]);
    console.log(newTodo);
  };

  return (
    <div>
      <div className="header">
        <input
          className="header-input"
          placeholder="자바스크립트를 배워봅시다"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        ></input>
        <button className="header-btn" onClick={onClickHandler}>
          추가하기
        </button>
        <div className="header-content">Todo List</div>
      </div>
      <div className="main-box">
        {todo.map((td) => (
          <div className="box1">{td.content}</div>
        ))}
      </div>
    </div>
  );
};

export default App2;
