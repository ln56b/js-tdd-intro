const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // 1. isSquare() - true if a === b
  it('returns true if both sides are equal', () => {
    const rectangle = new Rectangle(10,10);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  // 2. isSquare() - false if a !== b
  it('returns false if both sides are not equal', () => {
    const rectangle = new Rectangle(10,5);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  // 3. getArea() - return a * b
  it('returns rectangle area', () => {
    const area = new Rectangle(10,5);
    assert.strictEqual(area.getArea(), 50);
  });
  // 4. getPerimeter() - return 2 * (a + b)
  it('returns rectangle perimeter', () => {
    const perimeter = new Rectangle(2,3);
    assert.strictEqual(perimeter.getPerimeter(), 10);
  });
})

// const rectangle = new Rectangle(10, 5);
