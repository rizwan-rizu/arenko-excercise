import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.getByText("Carbon Intensity");
    screen.getByText("Carbon Intensity Over Time (Forecast / Actual)");
  });
});
