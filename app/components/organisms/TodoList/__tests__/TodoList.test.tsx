import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from '../TodoList';

describe('TodoList', () => {
  it('should disable the Add Task button when both title and description are empty', () => {
    render(<TodoList />);
    
    const addButton = screen.getByRole('button', { name: /add task/i });
    expect(addButton).toBeDisabled();
  });

  it('should enable the Add Task button when title is filled', async () => {
    render(<TodoList />);
    
    const titleInput = screen.getByPlaceholderText(/add a new task/i);
    await userEvent.type(titleInput, 'New Task');
    
    const addButton = screen.getByRole('button', { name: /add task/i });
    expect(addButton).not.toBeDisabled();
  });

  it('should enable the Add Task button when description is filled', async () => {
    render(<TodoList />);
    
    const descriptionInput = screen.getByPlaceholderText(/add a description/i);
    await userEvent.type(descriptionInput, 'Task description');
    
    const addButton = screen.getByRole('button', { name: /add task/i });
    expect(addButton).not.toBeDisabled();
  });
}); 