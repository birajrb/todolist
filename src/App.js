import { useState } from "react";
import Add from "./Add";
import styles from "./App.module.css";
import ItemList from "./ItemList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const removeTodoItems = (id) => {
    const newTodoItems = todoItems.filter((items) => items.id !== id);
    setTodoItems(newTodoItems);
  };
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <Add todoItems={todoItems} setTodoItems={setTodoItems} />
        <ItemList todoItems={todoItems} removeTodoItems={removeTodoItems} />
      </div>
    </div>
  );
}

export default App;
