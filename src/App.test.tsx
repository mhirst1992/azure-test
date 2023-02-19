
import { render, screen } from '@testing-library/react';
import App from './App';

test('Home Page renders Title and Subtitle Elements', () => {
  render(<App />);
  // Title Text
  expect(screen.getByTestId('title')).toBeInTheDocument();
  expect(screen.getByTestId('subtitle')).toBeInTheDocument();
});

test('Home Page renders the Navbar component', () => {
  render(<App />);
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
})
