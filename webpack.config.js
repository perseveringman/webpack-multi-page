module.exports = function(env, argv) {
  console.log( argv.mode, process.env.BUILD_ENV)
  return argv.mode === 'production' ?
    process.env.BUILD_ENV === 'prod' ?
    require('./configs/webpack.prod') :
    require('./configs/webpack.test') :
    require('./configs/webpack.dev')
}