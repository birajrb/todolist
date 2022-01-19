import React, { useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
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
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          width={15}
          className={styles.input}
        />
        <Button icon type="submit" size="large">
          <Icon name="add" />
        </Button>
      </Form>
    </div>
  );
}

export default Add;
