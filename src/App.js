import { useState } from "react";
import { Header } from "semantic-ui-react";
import Add from "./Add";
import styles from "./App.module.css";
import ItemList from "./ItemList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const removeTodoItems = (id) => {
    const newTodoItems = todoItems.filter((items, index) => index !== id);
    setTodoItems(newTodoItems);
  };
  return (
    <div className={styles.containerWrapper}>
      <Header as="h1" className={styles.header}>
        Todo List
      </Header>
      <div className={styles.container}>
        <Add todoItems={todoItems} setTodoItems={setTodoItems} />
        <ItemList todoItems={todoItems} removeTodoItems={removeTodoItems} />
      </div>
    </div>
  );
}

export default App;
