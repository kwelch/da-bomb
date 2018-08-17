const bomb = require('./index.js');

describe('da-bomb', function() {
  it('should pass', function() {
    expect(bomb('1')).toBe(true);
  });
})