// test/capitalizeFirstLetters.test.js
const assert = require('assert');

// capitalizeFirstLetters.js
function capitalizeFirstLetters(input) {
  return input.length > 0
  ? input
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')
  : '';
}

assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

assert.strictEqual(capitalizeFirstLetters(''), '');

