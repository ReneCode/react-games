

const should = require('chai').should()


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
      state.snake[0].should.be.deep.equal([4, 5])
      state.snake[1].should.be.deep.equal([5, 5])
    });

    it('snake should expand right', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.right
      }
      updateBoard(state);
      state.snake[0].should.be.deep.equal([5, 6])
      state.snake[1].should.be.deep.equal([5, 5])
    });

    it('snake should expand down', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.down
      }
      updateBoard(state);
      state.snake[0].should.be.deep.equal([6, 5])
      state.snake[1].should.be.deep.equal([5, 5])
    });

    it('snake should expand left', () => {
      let state = {
        maxRows: 10,
        maxCols: 10,
        snake: [[5, 5]],
        direction: direction.left
      }
      updateBoard(state);
      state.snake[0].should.be.deep.equal([5, 4])
      state.snake[1].should.be.deep.equal([5, 5])
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
      state.snake.length.should.be.equal(3)
      state.snake[0].should.be.deep.equal([4, 5])
      state.snake[1].should.be.deep.equal([5, 5])
      state.snake[2].should.be.deep.equal([6, 5])
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
      state.snake.length.should.be.equal(0)
      state.snakeDead.should.be.true
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
      state.snake.length.should.be.equal(0)
      state.snakeDead.should.be.true
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
      state.snake.length.should.be.equal(3)
      should.equal(state.fruit, null)
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
      should.not.equal(state.fruit, null)
    });
  })
})
