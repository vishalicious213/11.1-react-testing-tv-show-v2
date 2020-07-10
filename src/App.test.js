import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// TEST SUITE TO MAKE SURE TESTING WORKS
// describe('true is truthy and false is falsy', () => {
//     test('true is truthy', () => {
//       expect(true).toBe(true);
//     });
   
//     test('false is falsy', () => {
//       expect(false).toBe(false);
//     });
//   });

test('App renders w/o crashing', () => {
    render(<App />);
    screen.debug();
});

test('Render: Fetching data...', () => {
    render(<App />);
    expect(screen.getByText('Fetching data...')).toBeInTheDocument();
});

test('Stranger Things title should not be in DOM', () => {
    render(<App />);
    expect(screen.queryByText(/Stranger Things/)).toBeNull();
});