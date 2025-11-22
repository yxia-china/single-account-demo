const { greet } = require('./index');

test('greeting function works', () => {
  expect(greet('World')).toBe('Hello World!');
});
