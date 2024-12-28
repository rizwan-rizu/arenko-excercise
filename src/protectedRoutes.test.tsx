import { render, screen } from "@testing-library/react";
import ProtectedRoute from "./protectedRoutes";

describe("ProtectedRoute", () => {
  it("should render the provided element", () => {
    const MockComponent = () => <div data-testid="mock-element">Protected Content</div>;

    render(<ProtectedRoute element={<MockComponent />} role={["all"]} />);

    const element = screen.getByTestId("mock-element");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Protected Content");
  });
});
