const gulp = require('gulp');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const replace = require('gulp-replace');
// const minifyCss = require('gulp-minify-css');
// const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');

// Watch files for changes & reload
gulp.task('serve', function() {
  browserSync({
    port: 5000,
    notify: false,
    open: false,
    logPrefix: 'APP',
    files: ['src/*', 'index.html'],
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    server: {
      baseDir: ['', 'node_modules'],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch('src/*', browserSync.reload);
  gulp.watch('index.html', browserSync.reload);
});

// TODO: Prefix and minify the inlined CSS

// Build production files, the default task
gulp.task('default', function(cb) {
  gulp
    .src('src/overwebs-app.js')
    .pipe(sourcemaps.init())
    .pipe(uglify({ toplevel: true, mangle: true, compress: { passes: 2 } }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
  gulp
    .src('index.html')
    .pipe(replace('/src/overwebs-app.js', '/node_modules/overwebs-app/overwebs-app.js'))
    .pipe(replace('<span id="browser-sync-binding"></span>', ''))
    .pipe(gulp.dest('dist/'));
});
