import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login';

test('renders login component', () => {
    render(<Login />);
    const loginElement = screen.getByText(/login/i);
    expect(loginElement).toBeInTheDocument();
  });
  