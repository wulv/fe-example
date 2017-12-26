const sum = require('./sum');

test('adds 1 + 4 to equal 5', () => {
  expect(sum(1, 4)).toBe(5);
});