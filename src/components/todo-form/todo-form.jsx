import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    // Fix an ability to add new task
    const newTask = task.split('').every((char) => char === ' ');
    if (!newTask) {
      const len = todos.length;
      const lastTodoId = len ? todos[len - 1].id : 0;
      setTodos([
        ...todos,
        {
          id: lastTodoId + 1,
          label: task,
          checked: false,
        },
      ]);
      setTask('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
