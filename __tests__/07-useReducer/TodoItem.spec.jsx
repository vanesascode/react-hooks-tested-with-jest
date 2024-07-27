import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/07-useReducer/TodoItem";

describe("<todoItem/> tests", () => {
  const todo = {
    id: 1,
    description: "Todo 1",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the todo waiting to be completed", async () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    expect(screen.getByText(todo.description)).toBeTruthy();
    expect(screen.getByTestId("span").innerHTML).toBe("Todo 1");
  });

  test("the onToggleTodo function should be called", async () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByTestId("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("the todo should appear as completed", async () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByTestId("span");
    expect(spanElement.className).toBe(
      "align-self-center text-decoration-line-through"
    );
  });

  test("the onDeleteTodo function should be called", async () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
