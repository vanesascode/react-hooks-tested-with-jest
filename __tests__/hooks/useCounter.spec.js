import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

const initialValue = 20;

describe("useCounter tests", () => {
  test("should return default values", async () => {
    const { result } = renderHook(() => useCounter());

    const { increment, decrement, counter, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should return default the value from props", async () => {
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(20);
  });

  test("should increment the value", async () => {
    const { result } = renderHook(() => useCounter(initialValue));

    const { increment } = result.current;

    act(() => increment());
    act(() => increment(2));

    expect(result.current.counter).toBe(23);
  });

  test("should decrement the value", async () => {
    const { result } = renderHook(() => useCounter(initialValue));

    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(19);
  });

  test("shouldn't decrement the value if it is 0", async () => {
    const { result } = renderHook(() => useCounter(0));

    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(0);
  });

  test("should reset the value", async () => {
    const { result } = renderHook(() => useCounter(initialValue));

    const { reset, increment } = result.current;

    act(() => increment());
    expect(result.current.counter).toBe(21);

    act(() => reset());
    expect(result.current.counter).toBe(20);
  });
});
