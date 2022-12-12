import { useState, useEffect } from "react";

/* styles라는 javascript Object를 import한 다음, className props에
styles의 title안에 적용한 css selector이름을 적어서 호출 */
function Hello() {

  /* case 1. 함수 실행 후에 리턴 함수를 호출 */
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  /* case 2. 함수 실행 후에 리턴 함수를 호출 */
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  /* 결론적으로 hello() 함수에서 return 해주는 결과값은 <h1> 태그안에 있는 Hello text임 */
  return <h1>Hello</h1>;
}

/* App()함수에서 Hello component를 선언해서 사용 */
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
