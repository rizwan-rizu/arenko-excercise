import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './themeContext';

describe('App', () => {
  it('renders app correctly on default route', async () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText("Carbon Intensity Over Time (Forecast / Actual)")).toBeInTheDocument();
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Carbon Intensity")).toBeInTheDocument();
  });

  it('display page not found on random route', () => {
    render(
      <MemoryRouter initialEntries={['/lorem']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
