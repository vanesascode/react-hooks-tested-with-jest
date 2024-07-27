import { UserContext } from "../../src/08-useContext/context/UserContext";
import { render, screen } from "@testing-library/react";
import HomePage from "../../src/08-useContext/HomePage";

describe("<HomePage/> tests", () => {
  test("should show the component without the user", async () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("preElement");
    expect(preElement.innerHTML).toBe("null");
  });

  test("should show the component with the user", async () => {
    render(
      <UserContext.Provider value={{ user: { name: "Juan" } }}>
        <HomePage />
      </UserContext.Provider>
    );

    // screen.debug();

    expect(screen.getByLabelText("spanElement").innerHTML).toBe("Juan");
  });
});
