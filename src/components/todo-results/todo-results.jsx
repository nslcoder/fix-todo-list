import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  // Fix an ability to calculate completed tasks
  const calculateChecked = () => todos.filter((todo) => todo.checked === true)
  .length;

  return (
    <div className="todo-results">
      Done:
      <span>{calculateChecked()}</span>
    </div>
  );
};
