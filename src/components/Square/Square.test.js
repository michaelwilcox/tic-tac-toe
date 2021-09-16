import { act, fireEvent, render, screen } from '@testing-library/react';
import { Square } from './index';

test('renders Square with correct label', () => {
  render(<Square label={'O'}/>);
  expect(screen.getByText('O')).toBeInTheDocument();

  render(<Square label={'X'}/>);
  expect(screen.getByText('X')).toBeInTheDocument();
});

test('calls handler on click of square', () => {
    const mockCallback = jest.fn()
    const { getByText } = render(<Square index={4} label={'X'} handleClick={mockCallback} />)
  
    const square = getByText('X');
  
    act(() => {
      fireEvent.click(square)
    })
  
    expect(mockCallback).toHaveBeenCalled()
    expect(mockCallback).not.toHaveBeenCalledWith(3);
    expect(mockCallback).toHaveBeenCalledWith(4);
});
