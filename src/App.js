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
    { id: 1, title: "제목입니다", content: "내용입니다.", isDone: false },
    { id: 2, title: "리액트", content: "리액트를 배우자!", isDone: false },
  ]);

  const onAddTodo = () => {
    if (title === "" || content === "") return;
    let newData = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    let copy = [...todo, newData];
    setTodo(copy);
  };

  const onDeleteTodo = (id) => {
    const newArray = todo.filter((td) => td.id !== id);
    setTodo(newArray);
  };

  const onFinishTodo = (id) => {
    const idx = todo.findIndex((td) => td.id === id);
    let copy = [...todo];
    copy[idx].isDone = !copy[idx].isDone;
    setTodo(copy);
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
          {todo.map((td) =>
            td.isDone === false ? (
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
            ) : null
          )}
        </div>
        <h2>Done...!</h2>
        <div className="done">
          {todo.map((td) =>
            td.isDone === true ? (
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
                    취소
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

const TodoCard = (props) => {
  const { td, onDeleteTodo, onFinishTodo } = props;
  return (
    <div>
      <h2>{td.title}</h2>
      <p>{td.content}</p>
      <button onClick={() => onDeleteTodo(td.id)}>삭제하기</button>
      <button onClick={() => onFinishTodo(td.id)}>완료하기</button>
    </div>
  );
};

export default App;
