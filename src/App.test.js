import { render } from '@testing-library/react';
import { findWinner } from './App';

test('correctly renders a winner', () => {
  let board = [
    'X', 'O', null, 
    'X', null, 'O',
    'X', null, null
  ];
  let winner = findWinner(board);
  expect(winner).toEqual('X');

  board = [
    'X', 'O', null, 
     null, 'O', 'X',
    'X', 'O', null
  ];

  winner = findWinner(board);
  expect(winner).toEqual('O');

  board = [
    'X', 'O', 'X', 
     'O', 'O', 'X',
    'X', 'X', 'O'
  ];

  winner = findWinner(board);
  expect(winner).toEqual('D');
});
