import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct funcionality', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i });
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('Change to red');
});
