

class SetBoard {

  setRandom(maxRows, maxCols) {
    const maxVal = 2
    const fields = []
    for (let r = 0; r < maxRows; r++) {
      const row = []
      for (let c = 0; c < maxCols; c++) {
        const val = Math.floor(Math.random() * maxVal);
        row.push(val)
      }
      fields.push(row)
    }
    return fields
  }

  setValue(maxRows, maxCols, val) {
    const fields = []
    for (let r = 0; r < maxRows; r++) {
      const row = []
      for (let c = 0; c < maxCols; c++) {
        row.push(val)
      }
      fields.push(row)
    }
    return fields
  }
}

export default new SetBoard()
