
should = require('chai').should()

import direction from './direction'


describe('direction', () => {

  describe('turn right', () => {
    it('d -> l', () => {
      const d = direction.turnRight(direction.down);
      d.should.be.equal(direction.left)
    });
    it('l -> u', () => {
      const d = direction.turnRight(direction.left);
      d.should.be.equal(direction.up)
    });
    it('u -> r', () => {
      const d = direction.turnRight(direction.up);
      d.should.be.equal(direction.right)
    });
    it('r -> d', () => {
      const d = direction.turnRight(direction.right);
      d.should.be.equal(direction.down)
    });

  })
})
