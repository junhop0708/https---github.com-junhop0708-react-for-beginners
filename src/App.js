import Button from "./Button";
import styles from "./App.module.css";

/* styles라는 javascript Object를 import한 다음, className props에
styles의 title안에 적용한 css selector이름을 적어서 호출 */
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;