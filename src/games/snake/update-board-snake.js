/*
  snake
*/

import direction from './direction'

const updateBoard = (state) => {

  const samePos = (a, b) => {
    return a[0] === b[0] && a[1] === b[1]
  }

  const createNewFruit = () => {
    return [
      Math.floor(Math.random() * state.maxRows),
      Math.floor(Math.random() * state.maxCols)
    ]
  }

  if (state.snake.length === 0) {
    return
  }

  const newHead = [
    ...state.snake[0]
  ];

  switch (state.direction) {
    case direction.up:
      newHead[0]--;
      break;
    case direction.right:
      newHead[1]++
      break;
    case direction.down:
      newHead[0]++;
      break;
    case direction.left:
      newHead[1]--
      break;
    default:
      throw new Error('bad direction:' + state.direction)
  }
  if (newHead[0] < 0 || newHead[0] >= state.maxRows ||
    newHead[1] < 0 || newHead[1] >= state.maxCols) {
    state.snake = [];
    state.snakeDead = true;
  } else {
    state.snake.unshift(newHead)

    if (state.fruit && samePos(state.fruit, newHead)) {
      // eat the fruit
      state.snakeMaxLength++;
      state.fruit = null;
    } else {
      if (!state.fruit) {
        state.fruit = createNewFruit();
      }
    }

    if (state.snake.length > state.snakeMaxLength) {
      state.snake.pop();
    }

  }

}


export default updateBoard
