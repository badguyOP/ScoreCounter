import { React, useState } from 'react'
import styles from './App.module.css'

export default function App() {

  const [count, setCount] = useState(0)
  const [countA, setCountA] = useState(0)
    
    function add(event) {
      const id = event.target.dataset.id;
      const no = event.target.dataset.no;
      if(id) {
        setCount(count + parseInt(id));
      } if (no) {
        setCountA(countA + parseInt(no));
      }
    }

  return (
    <div className={styles.macbookAir1}>
      <div className={styles.home}>Home</div>
      <div className={styles.wrapper}>
        <h1 className={styles.h1} id="homeScore">
          {count}
        </h1>
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1} id="homeScore">
          {countA}
        </h1>
      </div>
      <button className={styles.button} autoFocus={true} onClick={add} data-id="1">
        +1
      </button>
      <button className={styles.button1} autoFocus={true} onClick={add} data-id="2">
        +2
      </button>
      <button className={styles.button2} autoFocus={true} onClick={add} data-id="3">
        +3
      </button>
      <div className={styles.away}>Away</div>
      <button className={styles.button3} autoFocus={true} onClick={add} data-no="1">
        +1
      </button>
      <button className={styles.button4} autoFocus={true} onClick={add} data-no="2">
        +2
      </button>
      <button className={styles.button5} autoFocus={true} onClick={add} data-no="3">
        +3
      </button>
    </div>
  );
};