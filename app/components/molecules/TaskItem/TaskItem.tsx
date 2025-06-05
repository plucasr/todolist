"use client"
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Input } from '../../atoms/Input/Input';
import styles from './TaskItem.module.scss';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  status: 'pending' | 'in-progress' | 'completed';
}

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string, description: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editTitle, editDescription);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <div className={`${styles.taskItem} ${task.status === 'completed' ? styles.completed : ''}`}>
      <div className={styles.taskContent}>
        {isEditing ? (
          <div className={styles.editForm}>
            <Input
              value={editTitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Task title"
              autoFocus
            />
            <Input
              value={editDescription}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEditDescription(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Task description"
            />
          </div>
        ) : (
          <>
            <h3 className={styles.title}>{task.title}</h3>
            <p className={styles.description}>{task.description}</p>
          </>
        )}
      </div>
      <div className={styles.taskActions}>
        <Checkbox
          checked={task.status === 'completed'}
          onChange={(checked) => onStatusChange(task.id, checked ? 'completed' : 'in-progress')}
          id={`task-${task.id}`}
          label=""
        />
        <button
          onClick={handleEdit}
          className={styles.editButton}
          aria-label={isEditing ? "Save task" : "Edit task"}
        >
          {isEditing ? '✓' : '✎'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className={styles.deleteButton}
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
    </div>
  );
}; 