import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setupStore } from './src/store';
import routes from './src/routes';

// As a basic setup, import your same slice reducers
const router = createBrowserRouter(routes);

// eslint-disable-next-line no-return-assign
export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <RouterProvider router={router}>{children}</RouterProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
