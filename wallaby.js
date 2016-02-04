module.exports = function (wallaby) {
  return {
    files: ['source.js'],
    tests: ['test.js'],
    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    }
  };
};
