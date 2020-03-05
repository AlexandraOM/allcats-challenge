import React from 'react';
import getData from './getData';
import App from '../App';
import { render, wait } from '@testing-library/react';
import mockCatData from '../model/mockCatData';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Data is returned from mack API call on render of page', () => {
  const history = createMemoryHistory();

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCatData)
    }).catch(console.error)
  );

  it('mocks api call to the correct url', async () => {
    const { getByText, debug } = render(
      <Router history={history}>
        <App></App>
      </Router>
    );
    expect(global.fetch.mock.calls[0][0]).toBe(
      'https://5e5932cd7777050014463360.mockapi.io/cats'
    );
    await wait();
  });
});
