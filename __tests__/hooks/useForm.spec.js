import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

const initialForm = {
  name: "Vanesa",
  email: "3eLb4@example.com",
  password: "123456",
};

describe("useForm tests", () => {
  test("should return default values", async () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      password: initialForm.password,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should change name value", async () => {
    const newValue = "Lis";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result.current;

    act(() => onInputChange({ target: { name: "name", value: newValue } }));

    expect(result.current.name).toBe(newValue);
  });

  test("should reset all values", async () => {
    const newValue = "Lis";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;

    act(() => onInputChange({ target: { name: "name", value: newValue } }));

    expect(result.current.name).toBe(newValue);

    act(() => onResetForm());

    expect(result.current.name).toBe(initialForm.name);
  });
});
