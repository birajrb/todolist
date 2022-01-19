import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import styles from "./Add.module.css";

function Add({ setTodoItems }) {
  const [item, setItem] = useState("");
  const [err, setErr] = useState(false);
  const handleSubmit = (e) => {
    {
      e.preventDefault();
      setErr(false);
      if (item === "") {
        setErr(true);
      }
      if (item) {
        setTodoItems((prev) => [...prev, item]);
        setItem("");
      }
    }
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          width={15}
          className={styles.input}
          error={err}
        />
        <Button icon type="submit" size="large">
          <Icon name="add" />
        </Button>
      </Form>
    </div>
  );
}

export default Add;
