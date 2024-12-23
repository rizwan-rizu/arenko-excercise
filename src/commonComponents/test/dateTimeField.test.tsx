import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { describe, it, expect, vi } from "vitest";
import DateTimeField from "../dateTimeField";

describe('DateTimeField Component', () => {
  it('renders the component with all props correctly', () => {
    const label = 'Pick Date';
    const handleChange = vi.fn();
    const minDate = dayjs("2023-01-01");
    const maxDate = dayjs("2023-12-31");

    render(
      <DateTimeField
        label={label}
        handleChange={handleChange}
        disablePast={true}
        disableFuture={false}
        minDate={minDate}
        maxDate={maxDate}
      />
    );

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});
