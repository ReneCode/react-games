
should = require('chai').should()

import updateBoard from './update-board-gof'


describe('gof - board', () => {

  it('should die', () => {
    let fields = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    updateBoard(fields);
    fields[1][1].should.be.equal(0)
  });

  it('should alive', () => {
    let fields = [
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
    updateBoard(fields);
    fields[1][1].should.be.equal(1)
  });

  it('should born new cell', () => {
    let fields = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]
    updateBoard(fields);
    fields[1][1].should.be.equal(1)
  });

  it('should die - overcrouded', () => {
    let fields = [
      [1, 1, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]
    updateBoard(fields);
    fields[1][1].should.be.equal(0)
  });
})
