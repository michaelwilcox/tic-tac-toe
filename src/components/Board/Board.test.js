import { render } from '@testing-library/react';
import { Board } from './index';

test('renders Board of 9 Squares', () => {
  let board = new Array(9).fill(null);
  const {container} = render(<Board board={board} />);
  expect(container.firstChild.childNodes.length).toEqual(9)
});

test('correctly renders markers in Board', () => {
    let board = [null,'O',null,'X',null,null,null,'O',null];
    const {container} = render(<Board board={board} />);
    expect(container.firstChild.childNodes[0].textContent).toEqual('');
    expect(container.firstChild.childNodes[1].textContent).toEqual('O');
    expect(container.firstChild.childNodes[2].textContent).toEqual('');
    expect(container.firstChild.childNodes[3].textContent).toEqual('X');
    expect(container.firstChild.childNodes[4].textContent).toEqual('');
    expect(container.firstChild.childNodes[5].textContent).toEqual('');
    expect(container.firstChild.childNodes[6].textContent).toEqual('');
    expect(container.firstChild.childNodes[7].textContent).toEqual('O');
    expect(container.firstChild.childNodes[8].textContent).toEqual('');
});