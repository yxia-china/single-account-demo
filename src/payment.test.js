const { processPayment } = require('./payment');

test('processPayment returns success message', () => {
  expect(processPayment(100)).toBe("Payment processed: $100");
});
