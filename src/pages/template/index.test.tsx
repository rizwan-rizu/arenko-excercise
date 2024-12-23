import { render, screen } from '@testing-library/react';
import Template from '.';

describe('Template Component', () => {
  test('renders Header with the correct title and the body content', () => {
    const headerTitle = 'Test Header';
    const bodyContent = <div data-testid="body">Body Content</div>;

    render(<Template headerTitle={headerTitle} body={bodyContent} />);

    const headerElement = screen.getByText(headerTitle);
    const bodyElement = screen.getByTestId('body');

    expect(headerElement).toBeInTheDocument();
    expect(bodyElement).toHaveTextContent('Body Content');
  });

  test('renders Footer', () => {
    const headerTitle = 'Test Header';
    const bodyContent = <div>Body Content</div>;

    render(<Template headerTitle={headerTitle} body={bodyContent} />);

    // Check if Footer is rendered
    const footerElement = screen.getByText('Built with ❤️ by Rizu');
    expect(footerElement).toBeInTheDocument();
  });
});
