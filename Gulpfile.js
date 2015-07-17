var root = 'src'; 
var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('webpack-stream');
var serve = require('browser-sync');
var yargs = require('yargs').argv;
var template = require('gulp-template');
var rename = require('gulp-rename');

var paths = {
  app: path.join(root, 'app', '**/*.js*'),
  entry: path.join(root, 'app/index.jsx'),
  output: path.join(root, 'dist'),
  template: {
    destination: path.join(root, 'app', 'components'),
    component: path.join('generator', 'component/*.js'),
    full: path.join('generator', 'full-component/*.js')
  }
};

gulp.task('build', ['webpack:build', 'serve'])

gulp.task('webpack:build', function(callback){
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
  callback();
});

gulp.task('serve', function(){
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {
      baseDir: root
    }
  });
  gulp.watch('src/dist/*', serve.reload)
});

gulp.task('lint', function(){
  return gulp.src(paths.app)
    .pipe(eslint({
      envs: {
        browser: true,
        es6: true
      },
      rules: {
        'quotes': [2, 'single', 'avoid-escape']
      }
    }))
    .pipe(eslint.format());
});

gulp.task('component', function(){

  var cap = function(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;

  return gulp.src(yargs.full ? paths.template.full : paths.template.component)
    .pipe(template({
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path){
      path.basename = path.basename.replace('temp', cap(name));
    }))
    .pipe(gulp.dest(paths.template.destination));
});

gulp.task('watch', function(){
  gulp.watch(paths.app, ['lint']);
});

gulp.task('default', ['build', 'lint', 'watch']);
