import { LoginPage } from "../../src/08-useContext/LoginPage";
import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/08-useContext/context/UserContext";

describe("<LoginPage /> tests", () => {
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("preElement");
    expect(preElement.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user: { name: "Juan" } }}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("preElement");
    expect(preElement.innerHTML).not.toBe("null");
    expect(preElement.innerHTML).toContain("Juan");
  });

  test("should call the setUser funcion when button is clicked", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />{" "}
      </UserContext.Provider>
    );

    const nextButton = screen.getByRole("button", {
      name: "Establecer usuario",
    });
    nextButton.click();
    expect(setUserMock).toHaveBeenCalledWith({
      email: "juan@google.com",
      id: 123,
      name: "Juan",
    });
  });
});
