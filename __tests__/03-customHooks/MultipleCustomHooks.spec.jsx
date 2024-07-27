import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-customHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useCounter");

describe("multiple custom hooks tests", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => jest.clearAllMocks());

  test("should return default values", async () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeTruthy();
  });

  test("should return data", async () => {
    useFetch.mockReturnValue({
      data: [{ author: "Vanesa", quote: "Hola mundo" }],
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByRole("paragraph").innerHTML).toBe("Hola mundo");

    expect(screen.getByTestId("footer").innerHTML).toContain("Vanesa");

    expect(
      screen.getByRole("button", { name: "Next quote" }).disabled
    ).toBeFalsy();
  });

  test("should return error", async () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      hasError: true,
    });

    render(<MultipleCustomHooks />);

    // screen.debug();

    expect(screen.getByRole("heading", { level: 3 })).toBeTruthy();
  });

  test("should call the increment function", async () => {
    useFetch.mockReturnValue({
      data: [{ author: "Vanesa", quote: "Hola mundo" }],
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByRole("button", { name: "Next quote" })).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
