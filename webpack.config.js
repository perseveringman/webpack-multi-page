module.exports = function func(env, argv) {
  // console.log( argv.mode, process.env.BUILD_ENV)
  // eslint-disable-next-line global-require
  // eslint-disable-next-line no-nested-ternary
  return argv.mode === 'production' ? process.env.BUILD_ENV === 'prod' ? require('./configs/webpack.prod') : require('./configs/webpack.test') : require('./configs/webpack.dev');
}