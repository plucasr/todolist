"use client"
import React, { useState, useEffect } from 'react';
import { Task } from '../../../types/task';
import { TaskItem } from '../../molecules/TaskItem/TaskItem';
import { Box } from '../../atoms/Box/Box';
import styles from './TodoList.module.scss';

const STORAGE_KEY = 'todo-tasks';

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: 'pending'
    };

    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '' });
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id: string, title: string, description: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title, description } : task
    ));
  };

  return (
    <Box variant="elevated" padding="large" maxWidth="800px" className={styles.todoList}>
      <Box variant="outlined" padding="medium" className={styles.addTaskForm}>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Task title"
            className={styles.input}
          />
          <input
            type="text"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            placeholder="Task description"
            className={styles.input}
          />
          <button type="submit" className={styles.addButton}>
            Add Task
          </button>
        </form>
      </Box>

      <Box variant="default" padding="medium" className={styles.tasks}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </Box>
    </Box>
  );
}; 