import React from "react";
import styles from "./ItemList.module.css";

function ItemList({ todoItems, removeTodoItems }) {
  return (
    <div className={styles.container}>
      {todoItems &&
        todoItems.map((items) => (
          <div key={items.key}>
            {items}
            <button className={styles.button} key={items.key} onClick={() => removeTodoItems(items.key)}>
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
