
import direction from './direction'

describe('direction', () => {

  describe('turn right', () => {
    it('d -> l', () => {
      const d = direction.turnRight(direction.down);
      expect(d).toBe(direction.left)
    });
    it('l -> u', () => {
      const d = direction.turnRight(direction.left);
      expect(d).toBe(direction.up)
    });
    it('u -> r', () => {
      const d = direction.turnRight(direction.up);
      expect(d).toBe(direction.right)
    });
    it('r -> d', () => {
      const d = direction.turnRight(direction.right);
      expect(d).toBe(direction.down)
    });

  })
})
