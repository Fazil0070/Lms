// Example: frontend/components/RegisterForm.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';

test('allows user registration', async () => {
  render(<RegisterForm />);
  
  // Simulate user filling out the form
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /Register/i }));

  // Wait for the registration process to complete (mocking the response in a real test)
  // Example: mock axios response with a success status
  // expect(await screen.findByText(/User registered/i)).toBeInTheDocument();
});
