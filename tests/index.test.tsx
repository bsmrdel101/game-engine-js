import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../src/components/Layout';

describe('Starting app', () => {
  test('App loads', () => {
    render(
      <Layout title="Home">
        <h1>Hello World!</h1>
      </Layout>
    );
    const homePage = screen.queryByTestId('layout');
    expect(homePage?.innerHTML).toEqual('<h1>Hello World!</h1>');
  });
});
