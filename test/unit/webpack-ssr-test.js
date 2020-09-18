const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.ssr');

  it('entry', () => {
    assert.equal(
      baseConfig.entry.index.indexOf(
        'build-webpack4/test/smoke/template/src/index/index.js' > -1,
        true,
      ),
    );
    assert.equal(
      baseConfig.entry.search.indexOf(
        'build-webpack4/test/smoke/template/src/index/index.js',
      ) > -1,
      true,
    );
  });
});
