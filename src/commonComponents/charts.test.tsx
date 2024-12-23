import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Chart from './chart';

const mockData = {
  xValues: ['2024-01-01 00:00', '2024-01-01 01:00'],
  forecastValues: [10, 12],
  actualValues: [8, 9],
};

describe('Chart Component', () => {
  afterEach(cleanup);

  it('should render bar chart when type is "bar" and intensityType is "both"', () => {
    render(<Chart {...mockData} intensityType='both' type="bar" />);

    expect(screen.getByText("Actual Intensity")).toBeInTheDocument();
    expect(screen.getByText('Forecast Intensity')).toBeInTheDocument();
    expect(screen.getByTestId("barChart")).toBeInTheDocument();
  });

  it('should render line chart when type is "bar" and intensityType is "both"', () => {
    render(<Chart {...mockData} intensityType='both' type="line" />);

    expect(screen.getByText('Forecast Intensity')).toBeInTheDocument();
    expect(screen.getByText("Actual Intensity")).toBeInTheDocument();
    expect(screen.getByTestId("lineChart")).toBeInTheDocument();
  });

  it('should render series based on intensityType "forecast"', () => {
    render(<Chart {...mockData} intensityType='forecast' type="line" />);

    expect(screen.getByText('Forecast Intensity')).toBeInTheDocument();
  });

  it('should render series based on intensityType "actual"', () => {
    render(<Chart {...mockData} intensityType='actual' type="line" />);

    expect(screen.getByText('Actual Intensity')).toBeInTheDocument();
  });

  it('should render correct xAxis and yAxis labels', () => {
    render(<Chart {...mockData} intensityType="both" type="bar" xAxisLabel="Date" yAxisLabel="Intensity" />);

    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Intensity')).toBeInTheDocument();
  });
});
