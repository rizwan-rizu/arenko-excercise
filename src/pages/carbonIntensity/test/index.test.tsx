import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CarbonIntensity from "../index";
import dayjs, { Dayjs } from "dayjs";
import { ThemeProvider } from "../../../themeContext";

// Mock DateTimePicker to simplify testing
vi.mock("@mui/x-date-pickers/DateTimePicker", () => {
  return {
    DateTimePicker: ({ label, onChange }: { label: string; onChange: (value: Dayjs | null) => void }) => (
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
    render(<ThemeProvider><CarbonIntensity /></ThemeProvider>);

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByLabelText("From")).toBeInTheDocument();
    expect(screen.getByLabelText("To")).toBeInTheDocument();
    expect(screen.getByLabelText("Intensity Type")).toBeInTheDocument();
  });

  it("should change the date on change event", async () => {
    render(<ThemeProvider><CarbonIntensity /></ThemeProvider>);

    const fromDateInput = screen.getByLabelText("From") as HTMLInputElement;
    const toDateInput = screen.getByLabelText("To") as HTMLInputElement;

    fireEvent.change(fromDateInput, { target: { value: "11/20/2024 01:00 pm" } });
    fireEvent.change(toDateInput, { target: { value: "12/20/2024 01:00 pm" } });

    expect(fromDateInput.value).toBe("11/20/2024 01:00 pm");
    expect(toDateInput.value).toBe("12/20/2024 01:00 pm");
  });
});