import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks/useFetch";

describe("useForm tests", () => {
  test("should return default values", async () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current).toEqual({
      data: null,
      isLoading: true,
      hasError: null,
    });
  });

  //TODO : this test is not working
  // test("should return data", async () => {
  //   const url = "https://jsonplaceholder.typicode.com/todos/1";

  //   const { result } = renderHook(() => useFetch(url));

  //   await waitFor(() => {
  //     expect(result.current.data !== null);
  //     console.log(result.current.data);
  //     expect(result.current).toEqual({
  //       data: null,
  //       isLoading: true,
  //       hasError: null,
  //     });
  //   });
  // });
});
