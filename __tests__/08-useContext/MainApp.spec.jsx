import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/08-useContext/MainApp";

describe("<MainApp/> tests", () => {
  test("should show the HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "HomePage"
    );
  });

  test("should show the AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("AboutPage")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "AboutPage"
    );
  });
});
