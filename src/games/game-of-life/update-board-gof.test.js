
import updateBoard from './update-board-gof'

describe('gof - board', () => {

  it('should die', () => {
    let fields = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    updateBoard({
      fields
    });
    expect(fields[1][1]).toBe(0)
  });

  it('should alive', () => {
    let fields = [
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
    updateBoard({
      fields
    });
    expect(fields[1][1]).toBe(1)
  });

  it('should born new cell', () => {
    let fields = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]
    updateBoard({
      fields
    });
    expect(fields[1][1]).toBe(1)
  });

  it('should die - overcrouded', () => {
    let fields = [
      [1, 1, 1],
      [0, 1, 1],
      [0, 1, 0],
    ]
    updateBoard({
      fields
    });
    expect(fields[1][1]).toBe(0)
  });
})
