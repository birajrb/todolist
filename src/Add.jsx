import React, { useState } from "react";
import styles from "./Add.module.css";

function Add({ setTodoItems }) {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    {
      e.preventDefault();
      setTodoItems((prev) => [...prev, item]);
    }
  };
  return (
    <div className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <input className={styles.input} type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
