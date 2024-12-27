import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorBoundary from "./errorBoundary";

describe("ErrorBoundary", () => {
  const ThrowError = () => {
    throw new Error("Test error");
  };

  it("should display fallback UI when an error occurs", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reload/i })).toBeInTheDocument();
  });

  it("should reload the page when the reload button is clicked", async () => {
    const reloadMock = vi.fn();

    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: reloadMock },
    });

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByRole("button", { name: /reload/i });
    await userEvent.click(reloadButton);

    expect(reloadMock).toHaveBeenCalled();
  });
});
