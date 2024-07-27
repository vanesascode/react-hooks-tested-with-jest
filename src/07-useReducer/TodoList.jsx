import TodoItem from "./TodoItem";
import propTypes from "prop-types";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: propTypes.array.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
  onToggleTodo: propTypes.func.isRequired,
};

export default TodoList;
