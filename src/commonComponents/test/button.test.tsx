import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MuiButton from '../button';

describe('MuiButton Component', () => {
  it('renders with default props', () => {
    render(<MuiButton label="Test Button" handleClick={() => { }} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders with different variants', () => {

    render(
      <>
        <MuiButton label="Test Button" variant={"contained"} handleClick={() => { }} />
        <MuiButton label="Test Button" variant={"outlined"} handleClick={() => { }} />
      </>
    )

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass(`MuiButton-contained`);
    expect(buttons[1]).toHaveClass(`MuiButton-outlined`);
  });

  it('renders with different colors', () => {
    render(
      <>
        <MuiButton label="Test Button" color={"secondary"} handleClick={() => { }} />
        <MuiButton label="Test Button" color={"error"} handleClick={() => { }} />
      </>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass(`MuiButton-colorSecondary`);
    expect(buttons[1]).toHaveClass(`MuiButton-colorError`);
  });

  it('renders with different sizes', () => {

    render(
      <>
        <MuiButton label="Test Button" size={"small"} handleClick={() => { }} />
        <MuiButton label="Test Button" size={"large"} handleClick={() => { }} />
      </>
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveClass(`MuiButton-sizeSmall`);
    expect(buttons[1]).toHaveClass(`MuiButton-sizeLarge`);
  });

  it('renders with fullWidth', () => {
    render(<MuiButton label="Test Button" fullWidth handleClick={() => { }} />);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-fullWidth');
  });

  it('renders with startIcon', () => {
    const mockIcon = <span data-testid="startIcon">Icon</span>;
    render(<MuiButton label="Test Button" startIcon={mockIcon} handleClick={() => { }} />);
    expect(screen.getByTestId('startIcon')).toBeInTheDocument();
  });

  it('renders with endIcon', () => {
    const mockIcon = <span data-testid="endIcon">Icon</span>;
    render(<MuiButton label="Test Button" endIcon={mockIcon} handleClick={() => { }} />);
    expect(screen.getByTestId('endIcon')).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    render(<MuiButton label="Test Button" disabled handleClick={() => { }} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls handleClick on click', async () => {
    const handleClick = vi.fn();
    render(<MuiButton label="Test Button" handleClick={handleClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});