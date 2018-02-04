
import updateBoard from './update-board-snake'
import direction from './direction'

describe('snake - board', () => {

  describe('move to new field', () => {

    it('snake should expand up', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.up
      }
      updateBoard(state);
      expect(state.snake[0]).toEqual([4, 5])
      expect(state.snake[1]).toEqual([5, 5])
    });

    it('snake should expand right', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.right
      }
      updateBoard(state);
      expect(state.snake[0]).toEqual([5, 6])
      expect(state.snake[1]).toEqual([5, 5])
    });

    it('snake should expand down', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.down
      }
      updateBoard(state);
      expect(state.snake[0]).toEqual([6, 5])
      expect(state.snake[1]).toEqual([5, 5])
    });

    it('snake should expand left', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.left
      }
      updateBoard(state);
      expect(state.snake[0]).toEqual([5, 4])
      expect(state.snake[1]).toEqual([5, 5])
    });
  })


  describe('cut on maxLenth', () => {
    it('direction up', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5], [6, 5], [7, 5]],
        snakeMaxLength: 3,
        direction: direction.up
      }
      updateBoard(state);
      expect(state.snake.length).toBe(3)
      expect(state.snake[0]).toEqual([4, 5])
      expect(state.snake[1]).toEqual([5, 5])
      expect(state.snake[2]).toEqual([6, 5])
    });
  })

  describe('should die on field border', () => {
    it('direction up', () => {
      let state = {
        maxRows: 5,
        maxCols: 5,
        snake: [[0, 3], [1, 3]],
        snakeMaxLength: 2,
        direction: direction.up
      }
      updateBoard(state);
      expect(state.snake.length).toBe(0)
      expect(state.snakeDead).toBe(true)
    });

    it('direction right', () => {
      let state = {
        maxRows: 5,
        maxCols: 5,
        snake: [[1, 4], [1, 3]],
        snakeMaxLength: 2,
        direction: direction.right
      }
      updateBoard(state);
      expect(state.snake.length).toBe(0)
      expect(state.snakeDead).toBe(true)
    });
  })

  describe('should increase length on eating a fruit', () => {
    it('direction up', () => {
      let state = {
        maxRows: 5,
        maxCols: 5,
        snake: [[2, 2], [2, 3]],
        fruit: [1, 2],
        snakeMaxLength: 2,
        direction: direction.up
      }
      updateBoard(state);
      expect(state.snake.length).toBe(3)
      expect(state.fruit).toBe(null)
    });
  })


  describe('should place fruit', () => {
    it('direction up', () => {
      let state = {
        maxRows: 5,
        maxCols: 5,
        snake: [[2, 2], [2, 3]],
        fruit: null,
        snakeMaxLength: 2,
        direction: direction.up
      }
      updateBoard(state);
      expect(state.fruit).not.toBe(null)
    });
  })
})
