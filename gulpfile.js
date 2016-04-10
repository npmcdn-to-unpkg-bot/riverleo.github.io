var gulp = require('gulp')

var cleanSrc = 'public/*.hot-update.*'
var webpackSrc = ['app/**/*.js', 'app/**/*.jsx']

gulp.task('webpack', () => {
  var webpack = require('webpack')
  var webpackStream = require('webpack-stream')
  var config = require('./webpack.config')
  var plumber = require('gulp-plumber')

  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
  config.devtool = 'source-map'

  return gulp.src(webpackSrc)
  .pipe(plumber({ errorHandler: (err) => { console.log(err); this.emit('end') } }))
  .pipe(webpackStream(config))
  .pipe(gulp.dest('./public'))
})

gulp.task('clean', () => {
  var rimraf = require('gulp-rimraf')

  return gulp.src(cleanSrc)
  .pipe(rimraf({ force: true }))
})

gulp.task('lint', () => {
  var eslint = require('gulp-eslint')

  return gulp.src(webpackSrc)
  .pipe(eslint())
  .pipe(eslint.format())
})

gulp.task('watch', () => {
  gulp.watch(webpackSrc, ['lint'])
  gulp.watch(cleanSrc, ['clean'])
})

gulp.task('default', ['lint', 'clean', 'watch'])
gulp.task('build', ['lint', 'webpack'])
