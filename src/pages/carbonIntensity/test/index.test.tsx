import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CarbonIntensity from "../index";
import dayjs from "dayjs";

// Mock DateTimePicker to simplify testing
vi.mock("@mui/x-date-pickers/DateTimePicker", () => {
  return {
    DateTimePicker: ({ label, onChange }: { label: string; onChange: (value: any) => void }) => (
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          data-testid={`${label}-datePicker`}
          type="text"
          onBlur={(e) => onChange(dayjs(e.target.value))}
        />
      </div>
    ),
  };
});

describe("CarbonIntensity Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render CarbonIntensity with filters", () => {
    render(<CarbonIntensity />);

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByLabelText("From")).toBeInTheDocument();
    expect(screen.getByLabelText("To")).toBeInTheDocument();
    expect(screen.getByLabelText("Intensity Type")).toBeInTheDocument();
  });

  it("should change the date on change event", async () => {
    render(<CarbonIntensity />);

    const fromDateInput = screen.getByLabelText("From") as HTMLInputElement;
    const toDateInput = screen.getByLabelText("To") as HTMLInputElement;

    fireEvent.change(fromDateInput, { target: { value: "11/20/2024 01:00 pm" } });
    fireEvent.change(toDateInput, { target: { value: "12/20/2024 01:00 pm" } });

    expect(fromDateInput.value).toBe("11/20/2024 01:00 pm");
    expect(toDateInput.value).toBe("12/20/2024 01:00 pm");
  });

  it("should display an error message when an invalid date range is selected", async () => {
    render(<CarbonIntensity />);

    const fromDateInput = screen.getByTestId("From-datePicker");
    const toDateInput = screen.getByTestId("To-datePicker");

    userEvent.type(fromDateInput, "2024-12-10T00:00:00");
    userEvent.tab();
    userEvent.type(toDateInput, "2024-11-20T00:00:00");
    userEvent.tab();

    expect(
      await screen.findByText("Invalid date: Ensure from date is before to date.")
    ).toBeInTheDocument();
  });
});