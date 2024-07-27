import propTypes from "prop-types";

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        data-testid="span"
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  onToggleTodo: propTypes.func.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
};

export default TodoItem;
