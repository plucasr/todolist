import React from 'react';
import { TodoList } from '../components/organisms/TodoList/TodoList';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoList />
      </main>
    </div>
  );
}; 