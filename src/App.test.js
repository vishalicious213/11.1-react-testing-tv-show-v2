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
    // screen.debug(); // shows DOM elements in tree in console
});

test('Render: Fetching data...', () => {
    render(<App />);
    expect(screen.getByText('Fetching data...')).toBeInTheDocument();
}); // Use getBy to find elements that should be in DOM

test('Stranger Things title should not be in DOM', () => {
    render(<App />);
    expect(screen.queryByText(/Stranger Things/)).toBeNull();
}); // use queryBy to assert that elements are NOT in DOM

test('Renders App and axios call gets data', async () => {
    render(<App />);
    // expect(screen.queryByText(/Stranger Things/)).toBeNull();
    screen.debug();
    const findH1 = await screen.findAllByText(/Stranger Things/);
    // console.log(findH1);
    expect(findH1[0]).toBeInTheDocument();
});