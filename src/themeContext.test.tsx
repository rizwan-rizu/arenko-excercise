import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useThemeContext } from "./themeContext";

const TestComponent = () => {
  const { darkMode, toggleTheme } = useThemeContext();
  return (
    <div>
      <p data-testid="theme-mode">{darkMode ? "dark" : "light"}</p>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render with the correct initial theme based on localStorage", () => {
    localStorage.setItem("theme", "dark");
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-mode").textContent).toBe("dark");
  });

  it("should toggle the theme and update localStorage", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeMode = screen.getByTestId("theme-mode");
    const toggleButton = screen.getByTestId("toggle-theme");

    expect(themeMode.textContent).toBe("light");
    expect(localStorage.getItem("theme")).toBeNull();

    fireEvent.click(toggleButton);
    expect(themeMode.textContent).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(toggleButton);
    expect(themeMode.textContent).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
