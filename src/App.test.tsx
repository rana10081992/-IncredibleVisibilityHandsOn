import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { GET_BOOKS } from './GetBookQuery';

const mocks = [
  {
    request: {
      query: GET_BOOKS,
    },
    result: {
      data: {
        books: [
          { title: 'The Awakening', author: 'Kate Chopin' },
          { title: 'City of Glass', author: 'Paul Auster' },
        ],
      },
    },
  },
];

test('renders book list', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(await screen.findByText('The Awakening')).toBeInTheDocument();
  expect(await screen.findByText('City of Glass')).toBeInTheDocument();
});
