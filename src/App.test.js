import React from 'react';
import { render } from '@testing-library/react';
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
});