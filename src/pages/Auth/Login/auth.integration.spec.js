import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react/pure';

import renderWithProviders from '../../../../test.utils';
import Login from './index';

const { getComputedStyle } = window;

beforeAll(() => {
  window.getComputedStyle = (elt) => getComputedStyle(elt);
});

describe('Login Page', () => {
  test('Should Render Successfully', async () => {
    renderWithProviders(<Login />);
    expect(screen.getByRole('textbox', { name: /password/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('Should show loading status when click submit button', async () => {
    renderWithProviders(<Login />);
    const loginBtn = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginBtn);
    expect(screen.getByRole('button', { name: /Loading.../i })).toBeInTheDocument();
  });
});
