const config = require('.');

describe('prettier-config', () => {
  it('has a bunch of rules', () => {
    expect(Object.keys(config).length).toBeGreaterThan(1);
  });
});
