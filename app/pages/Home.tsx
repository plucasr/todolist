import React from 'react';
import { Header } from '../components/molecules/Header/Header';
import { TodoList } from '../components/organisms/TodoList/TodoList';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <TodoList />
      </main>
    </div>
  );
}; 