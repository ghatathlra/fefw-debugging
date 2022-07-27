import {useEffect, useState, useCallback} from 'react';

import {todoApi} from './services/apis';
import {errorLogger} from './services/utils';
import {TodoForm, TodoList} from './components';

import styles from './App.module.css';

function App() {
  const [newWork, setNewWork] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoApi.getTodos().then(setTodos).catch(errorLogger.log);
  }, []);

  const addTodo = useCallback(() => {
    if (newWork) {
      const newTodo = {
        id: String(todos.length + 1),
        work: newWork,
        done: false,
      };
      setTodos([newTodo, ...todos]);
    }
  }, [todos]);

  const removeTodo = useCallback((todo) => {
    setTodos(todos.filter((td) => td.id !== todo.id));
  }, [todos]);

  const markTodoAsDone = useCallback((todo) => {
    setTodos(todos.map((td) => (td.id === todo.id ? {...td, done: true} : td)));
  }, [todos]);

  return (
    <div className={styles.appcontainer}>
      <div className="mb-4">
        <TodoForm value={newWork} onChange={setNewWork} onSubmit={addTodo} />
      </div>
      <div className="mb-4">
        <TodoList todos={todos} onDone={markTodoAsDone} onRemove={removeTodo} />
      </div>
    </div>
  );
}

export default App;
