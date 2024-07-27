import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount ? todosCount : 0},{" "}
        <small>pendientes: {pendingTodosCount ? pendingTodosCount : 0}</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos ? todos : []}
            onDeleteTodo={handleDeleteTodo ? handleDeleteTodo : null}
            onToggleTodo={handleToggleTodo ? handleToggleTodo : null}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo ? handleNewTodo : null} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
