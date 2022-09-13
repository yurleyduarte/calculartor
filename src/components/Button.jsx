import React from 'react'
import styles from '../css/button.module.css'

const Button = ({ color, dato }) => {
  let btnColor = "";
  switch (color) {
    case "w":
      btnColor = styles.btnWhite;
      break;
    case "g":
      btnColor = styles.btnGreen;
      break;
    case "r":
      btnColor = styles.btnRed;
      break;
    default:
      break;
  }
  return (
    <div className={styles.containerBtn}>
      <Button className={`${styles.btn} ${btnColor}`}>{dato}</Button>
    </div>
  );
};

export default Button;