/*
  game of life rules
*/

const updateBoard = (fields) => {
  const maxRow = fields.length - 1;
  const maxCol = fields[0].length - 1;

  const countNeighbours = (row, col) => {
    let count = 0
    for (let r = row - 1; r <= row + 1; r++) {
      if (r >= 0 && r <= maxRow) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (c >= 0 && c <= maxCol) {
            if (!(r === row && c === col)) {
              count += fields[r][c]
            }
          }
        }
      }
    }
    return count;
  }

  const counts = []
  for (let r = 0; r <= maxRow; r++) {
    let row = [];
    for (let c = 0; c <= maxCol; c++) {
      const count = countNeighbours(r, c);
      row.push(count)
    }
    counts.push(row)
  }

  for (let r = 0; r <= maxRow; r++) {
    for (let c = 0; c <= maxCol; c++) {
      const count = counts[r][c]
      let newVal = fields[r][c]
      if (count === 3) {
        newVal = 1
      } else if (count > 3 || count < 2) {
        newVal = 0
      }
      fields[r][c] = newVal
    }
  }
  return fields;
}


export default updateBoard
