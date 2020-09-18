const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.ssr');

  it('entry', () => {
    assert.equal(
      baseConfig.entry.index,
      'E:/code/webpack/geektime-webpack-course/code/chapter04/build-webpack/test/smoke/template/src/index/index.js',
    );
    assert.equal(
      baseConfig.entry.search,
      'E:/code/webpack/geektime-webpack-course/code/chapter04/build-webpack/test/smoke/template/src/search/index.js',
    );
  });
});
