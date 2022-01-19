import React from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import styles from "./ItemList.module.css";

function ItemList({ todoItems, removeTodoItems }) {
  return (
    <div className={styles.container}>
      <Header as="h2" textAlign="center">
        Jobs todos
      </Header>
      {todoItems &&
        todoItems.map((items, index) => (
          <div key={index} className={styles.listContainer}>
            <div className={styles.sn}>{index + 1}</div>
            <div className={styles.items}>{items}</div>
            <Button animated key={index} onClick={() => removeTodoItems(index)} size="small">
              <Button.Content visible className={styles.delete}>
                Delete
              </Button.Content>
              <Button.Content hidden>
                <Icon name="delete" />
              </Button.Content>
            </Button>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
