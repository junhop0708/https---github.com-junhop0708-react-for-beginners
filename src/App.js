import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  /* useState에 선언한 modifying 함수인 setToDo()함수 선언 및 실행 */
  const onChange = (event) => setToDo(event.target.value);

  /* submit 용도로 사용하기 위한 함수 생성 */
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    /* useState에 선언한 modifying 함수인 setToDos() 함수 선언 및 실행 
    useState의 값은 배열로 지정 */
    //setToDos((currentArray) => [toDo, ...currentArray]); /* 변수를 수정하기 위해서는 수정 함수를 사용 */
    setToDos(function(currentArray){
      return [toDo, ...currentArray] // ...currentArray (...Object : array안에 element를 return)
    });
    
    setToDo(""); /* 변수를 수정하기 위해서는 수정 함수를 사용 */
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
