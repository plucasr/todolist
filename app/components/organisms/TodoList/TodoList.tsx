"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TaskItem, Task } from "../../molecules/TaskItem/TaskItem";
import { Input } from "../../atoms/Input/Input";
import { Textarea } from "../../atoms/Textarea/Textarea";
import styles from "./TodoList.module.scss";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import useLocalStorageState from '../../../hooks/useLocalStorageState';

const STORAGE_KEY = 'todo-tasks';

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(STORAGE_KEY, []);
  const [newTask, setNewTask] = useState<Pick<Task, "title" | "description">>({
    title: "",
    description: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.title,
        description: newTask.description,
        completed: false,
        status: "pending",
      };
      setTasks((prev: Task[]) => [...prev, task]);
      setNewTask({ title: "", description: "" });
    }
  };

  const handleStatusChange = (id: string, status: Task["status"]) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === id
          ? { ...task, status, completed: status === "completed" }
          : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev: Task[]) => prev.filter((task: Task) => task.id !== id));
  };

  const handleEditTask = (id: string, title: string, description: string) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === id ? { ...task, title, description } : task
      )
    );
  };

  return (
    <div className={styles.todoList}>
      <Box variant="elevated" padding="large" maxWidth="md">
        <form onSubmit={handleSubmit} className={styles.addTaskForm}>
          <Input
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            required
          />
          <Textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            placeholder="Add a description..."
          />
          <Button type="submit" fullWidth>
            Add Task
          </Button>
        </form>
        <div className={styles.tasks}>
          {tasks.map((task: Task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          ))}
        </div>
      </Box>
    </div>
  );
};
