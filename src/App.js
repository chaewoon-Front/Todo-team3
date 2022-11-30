import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

const Todo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, title: "제목입니다", content: "내용입니다." },
    { id: 2, title: "리액트", content: "리액트를 배우자!" },
  ]);

  const onAddTodo = () => {
    if (title === "" && content === "") return;
    let newData = {
      id: todo.length + 1,
      title: title,
      content: content,
    };
    let copy = [...todo, newData];
    setTodo(copy);
  };

  const onDeleteTodo = (id) => {
    console.log(id);
  };

  const onFinishTodo = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="container">
        <div>My Todo list</div>
        <div>React</div>
      </div>
      <div className="header">
        <label>제목</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label>내용</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        <button className="add_btn" onClick={onAddTodo}>
          추가하기
        </button>
      </div>
      <div className="content">
        <h2>Working...</h2>
        <div className="working">
          {todo.map((td) => (
            <div className="working-box">
              <h2>{td.title}</h2>
              <p>{td.content}</p>
              <div style={{ display: "flex" }}>
                <button
                  className="working-btn1"
                  onClick={() => onDeleteTodo(td.id)}
                >
                  삭제하기
                </button>
                <button
                  className="working-btn2"
                  onClick={() => onFinishTodo(td.id)}
                >
                  완료
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2>Done...!</h2>
        <div className="done">{/* {todo.map((td) => ))} */}</div>
      </div>
    </div>
  );
};

export default App;
