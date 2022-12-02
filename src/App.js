// 공부 필요한 내용들

//

//---------------------------------------------------//

// 컴포넌트 외부의 필요한 파일을 가져오는 영역
// export된 컴포넌트를 사용할 경우 임포트 해주면 됨
// useState 임포트
import React, { useState } from "react";
// App.css를 임포트 해주어 css파일 내용을 적용함
import "./App.css";

// App 컴포넌트, <div></div>태그를 리턴하는 App 함수
function App() {
  //리턴문 앞 영역은 자바스크립트 쓸 수 있는 영역
  return (
    // 리턴문 안 영역은 JSX문법을 쓸 수 있는 영역(HTML 태그처럼)
    <div>
      <Todo />
    </div>
  );
}

// Todo 함수
const Todo = () => {
  // title state 생성
  const [title, setTitle] = useState("");
  // content state 생성
  const [content, setContent] = useState("");
  //  초기값을 객체 형태로 묶은 todo state 생성
  const [todo, setTodo] = useState([
    { id: 1, title: "제목입니다", content: "내용입니다.", isDone: false },
    { id: 2, title: "리액트", content: "리액트를 배우자!", isDone: false },
  ]);
  // 추가하기 버튼의 함수
  const onAddTodo = () => {
    if (title === "" || content === "") return;
    let newData = {
      id: todo.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    // 전개연산자를 통해 불변성을 지켜줌 [...todo -> 기존 값 newData -> 추가하고 싶은 값]
    let copy = [...todo, newData];
    // copy set함수
    setTodo(copy);
  };
  // 삭제하기 버튼의 함수
  const onDeleteTodo = (id) => {
    const newArray = todo.filter((td) => td.id !== id);
    // newArray set 함수
    setTodo(newArray);
  };
  // 완료하기 버튼의 함수
  // findIndex 함수로 조건에 일치하는 요소에 인덱스를 반환
  const onFinishTodo = (id) => {
    const idx = todo.findIndex((td) => td.id === id);
    let copy = [...todo];
    copy[idx].isDone = !copy[idx].isDone;

    setTodo(copy);
  };

  return (
    // JSX에서는 1개의 Element만 반환할 수 있어 1개의 <div> 태그에 묶음
    //자바스크립트는 {}를 사용 {}가 없으면 단순 문자열로 인식
    <div>
      <div className="container">
        <div>My Todo list</div>
        <div>React</div>
      </div>
      <div className="header">
        <label>제목</label>
        {/* 이벤트 핸들러 안에서 이벤트 객체를 꺼내 사용
             인풋 값을 입력할때 e.target.value로 꺼내 사용*/}
        {/* value와 state를 연결 */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label>내용</label>
        {/* 이벤트 핸들러 안에서 이벤트 객체를 꺼내 사용
             인풋 값을 입력할때 e.target.value로 꺼내 사용*/}
        {/* value와 state를 연결 */}
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
        />
        {/* onAddTodo 함수를 버튼의 onClick에 주입 */}
        <button className="add_btn" onClick={onAddTodo}>
          추가하기
        </button>
      </div>
      <div className="content">
        <h2>Working...</h2>
        <div className="working">
          {/* todo 맵으로 td의 정보를 순회시킴*/}
          {todo.map((td) =>
            td.isDone === false ? (
              <div className="working-box">
                {/* 중괄호 안의 값이 렌더링 되도록 해줌 */}
                <h2>{td.title}</h2>
                <p>{td.content}</p>
                <div style={{ display: "flex" }}>
                  {/* onDeleteTodo 함수의 id 값을 버튼의 onClick에 주입 */}
                  <button
                    className="working-btn1"
                    onClick={() => onDeleteTodo(td.id)}
                  >
                    삭제하기
                  </button>
                  {/* onFinishTodo 함수의 id 값을 버튼의 onClick에 주입 */}
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
          {/* 맵으로 배열의 모든 요소를 순회시킴*/}
          {todo.map((td) =>
            td.isDone === true ? (
              <div className="working-box">
                <h2>{td.title}</h2>
                <p>{td.content}</p>
                <div style={{ display: "flex" }}>
                  {/* onDeleteTodo 함수의 id 값을 버튼의 onClick에 주입 */}
                  <button
                    className="working-btn1"
                    onClick={() => onDeleteTodo(td.id)}
                  >
                    삭제하기
                  </button>
                  {/* onFinishTodo 함수의 id 값을 버튼의 onClick에 주입 */}
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

// props을 사용하여 중괄호 안의 값을 전달
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

//컴포넌트를 밖으로 사용할 수 있게 내보내는 영역
export default App;
