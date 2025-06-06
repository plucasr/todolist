import React from 'react';
import { TodoList } from '../../organisms/TodoList/TodoList';
import styles from './TodoTemplate.module.scss';

export const TodoTemplate: React.FC = () => {
  return (
    <div className={styles.todoTemplate}>
      <header className={styles.header}>
        <h1>Atomic Todo</h1>
        <p>Organize your tasks with me</p>
      </header>
      <TodoList />
    </div>
  );
}; 