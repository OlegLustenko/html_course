const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const cssPath = ['./core/content/**/*.css', '!./core/content/**/*.next.css'];


gulp.task('postcss', function() {
  gulp.src(cssPath)
    .pipe(postcss([require('postcss-font-magician')(),
      require('postcss-cssnext')({ browsers: null })
    ]))
    .pipe(rename({ suffix: '.next' }))
    .pipe(gulp.dest((f) => {
      console.log(f.history[0].split('/').pop());
      return f.base;
    }));
});

gulp.task('default', ['postcss'], () => {
  gulp.watch(cssPath, ['postcss']);
});