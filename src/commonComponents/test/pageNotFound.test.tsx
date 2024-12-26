import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from '../pageNotFound';

describe('PageNotFound Component', () => {
  test('renders correctly and handles "Go Back" button click', async () => {
    render(
      <MemoryRouter initialEntries={['/lorem']}>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found!')).toBeInTheDocument();

    const goBackButton = screen.getByRole('button', { name: /go back/i });
    expect(goBackButton).toBeInTheDocument();

    await userEvent.click(goBackButton);
  });
});