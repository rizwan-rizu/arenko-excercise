import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import RadioBtn from '../radioBtn';
import { setIntensityType } from '../../pages/carbonIntensity/action';

describe('RadioBtn Component', () => {
  const dispatch = vi.fn();
  const value = 'low';
  const data = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];
  const title = 'Carbon Intensity';

  const renderComponent = (props = {}) =>
    render(<RadioBtn title={title} value={value} dispatch={dispatch} data={data} {...props} />);

  it('renders the radio buttons with the correct labels and values', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeInTheDocument();

    data.forEach(item => {
      expect(screen.getByLabelText(item.label)).toBeInTheDocument();
    });
  });

  it('calls dispatch with the correct value when a radio button is selected', () => {
    renderComponent();

    fireEvent.click(screen.getByLabelText('Medium'));

    expect(dispatch).toHaveBeenCalledWith(setIntensityType('medium'));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('renders the radio buttons in a row when isRow is true', () => {
    const { container } = renderComponent({ isRow: true });

    const radioGroup = container.querySelector('div.MuiRadioGroup-root');
    expect(radioGroup).toHaveStyle('flex-direction: row');
  });
});
