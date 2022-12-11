import PropTypes from "prop-types";
import styles from "./Button.module.css";

/* styles라는 javascript Object를 import한 다음, className props에
styles의 title안에 적용한 css selector이름을 적어서 호출 */
function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;