let gulp = require('gulp');
let postcss = require('gulp-postcss');
let sourcemaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');
// let {join} = require('path');
const cssPath = ['./src/**/*.css', '!./src/**/*.next.css'];


gulp.task('postcss', function () {
  gulp.src(cssPath)
    .pipe(postcss([require('postcss-cssnext')({ browsers: null })]))
    .pipe(rename({ suffix: '.next' }))
    .pipe(gulp.dest((f) => {
      // console.log(JSON.stringify(f));
      let history = f.history[0].split('/'), filename = 'next.' + history.pop();
      // history.pop(); history.push('dist/'); history.splice(0, 5);
      console.log(filename);
      // return './' + history.join('/') + filename;
      return f.base;
    }));
});

gulp.task('default', ['postcss'], function () {
  gulp.watch(cssPath, ['postcss']);
  }
);
