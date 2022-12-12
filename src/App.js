import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

/* styles라는 javascript Object를 import한 다음, className props에
styles의 title안에 적용한 css selector이름을 적어서 호출 */
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);


  /* 해당 function은 한번만 실행 */
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  /* keyword 값이 변경되었을 때만 실행되는 함수 */
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  /* counter 값이 변경되었을 때만 실행되는 함수 */
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  /* keyword와 counter 값이 변경되었을 때만 실행되는 함수 */
  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      
      <hr />

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />

      <hr />
      
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;