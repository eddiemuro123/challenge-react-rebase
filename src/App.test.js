import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My really cool blog site logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  expect(linkElement).toBeInTheDocument();
});
