import { todoReducer } from "../../src/07-useReducer/todoReducer";

describe("todoReducer tests", () => {
  const initialState = [
    {
      id: 1,
      todo: "Demo todo",
      done: false,
    },
  ];

  test("should return default values", () => {
    const currentState = todoReducer(initialState, {});

    expect(currentState).toEqual(initialState);
  });

  test("should add a new todo", () => {
    const newTodo = {
      id: 2,
      todo: "Demo todo 2",
      done: true,
    };

    const newState = todoReducer(initialState, {
      type: "[TODO] Add Todo",
      payload: newTodo,
    });
    expect(newState.length).toBe(2);
    expect(newState).toContain(newTodo);

    console.log({ newState });
  });

  test("should remove a todo", () => {
    const newState = todoReducer(initialState, {
      type: "[TODO] Remove Todo",
      payload: 1,
    });
    expect(newState.length).toBe(0);
    expect(newState).toEqual([]);
  });

  test("should toggle a todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
