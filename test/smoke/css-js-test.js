// 检测 css 和 js 是否有加载出来

const glob = require('glob-all');

describe('Checking generated css js files', () => {
  it('should generate css js files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search*.js',
      './dist/search*.css',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no css js files genesrated!');
    }
  });
});
