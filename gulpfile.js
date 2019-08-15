'use strict';

var autoprefixer = require('autoprefixer'),
    gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin'),
    pug          = require('gulp-pug'),
    emitty       = require('emitty').setup('src', 'pug'),
    gulpif       = require('gulp-if'),
    plumber      = require('gulp-plumber'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    watch        = require('gulp-watch'),
    gutil        = require('gulp-util'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    calc         = require('postcss-calc'),
    postcssSVG   = require('postcss-svg'),
    cssImport    = require('postcss-import'),
    flexBugs     = require('postcss-flexbugs-fixes'),
    precss       = require('precss'),
    cssEmpty     = require('postcss-discard-empty'),
    cleanCSS     = require('gulp-clean-css'),
    rimraf       = require('rimraf'),
    seq          = require('run-sequence'),
    R            = require('ramda'),
    browserSync  = require('browser-sync').create();

/* ==========================================================================
   Variables
   ========================================================================== */

var paths = {
  pug: 'src/**/*.pug',
  css: 'src/css/**/*.css',
  js: 'src/js/**/*.js',
  jsLibraries: 'src/js/libraries/*.js',
  jsComponents: 'src/js/components/*.js',
  jsOther: 'src/js/*.js',
  img: 'src/img/*'
};

var postcssProcessors = [
  cssImport({ glob: true }),
  precss(),
  calc(),
  postcssSVG({ paths: ['src/sprite-css'], svgo: true }),
  flexBugs(),
  autoprefixer({ browsers: ['> 0.1%'] }),
  cssEmpty()
];

var onError = function(err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};

var global = {
    watch: false,
    emittyChangedFile: ''
};

/* ==========================================================================
   Tasks
   ========================================================================== */

gulp.task('default', function(cb) {
  seq('watch', 'server', cb);
});

gulp.task('build', function(cb) {
  seq(['html', 'css', 'js', 'img'], cb);
});

gulp.task('watch', ['setWatch', 'build'], function() {
  global.watch = true;
  watch( paths.pug, function() { seq('html');});
  watch( paths.css, function() { seq('css'); });
  watch( paths.js,  function() { seq('js');  });
  watch( paths.img, function() { seq('img'); });
});

gulp.task('clean', function(cb) {
  rimraf('dist', cb);
});

gulp.task('server', function() {
  browserSync.init({ server: { baseDir: 'dist' } });
});

gulp.task('html', function() {
  return gulp.src( paths.pug )
    .pipe( plumber({ errorHandler: onError }))
    .pipe( pug({
      pretty: true,
      locals: { R: R }
    }) )
    .pipe( gulp.dest('dist') )
    .pipe( browserSync.stream() );
});

gulp.task('setWatch', function() {
    global.isWatching = true;
});

gulp.task('css', function() {
  return gulp.src('src/css/base.css')
    .pipe( plumber({ errorHandler: onError }))
    .pipe( sourcemaps.init() )
    .pipe( postcss(postcssProcessors) )
    .pipe(cleanCSS())
    .pipe( rename('style.min.css'))
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/resources/css') )
    .pipe( browserSync.stream({match: '**/*.css'}) );
});

gulp.task('js-libraries', function() {
  return gulp.src( paths.jsLibraries )
    .pipe( concat('libraries.js') )
    .pipe( uglify() )
    .pipe( gulp.dest('dist/resources/js') )
    .pipe( browserSync.stream() );
});

gulp.task('js-components', function() {
  return gulp.src( paths.jsComponents )
    .pipe( concat('main.js') )
    .pipe( gulp.dest('dist/resources/js') )
    .pipe( browserSync.stream() );
});

gulp.task('js-other', function() {
  return gulp.src( paths.jsOther )
    .pipe( gulp.dest('dist/resources/js') )
    .pipe( browserSync.stream() );
});

gulp.task('js', function(cb) {
  seq(['js-libraries', 'js-components', 'js-other'], cb);
});

gulp.task('img', function () {
  return gulp.src( paths.img )
    .pipe( imagemin({
      optimizationLevel: 2,
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe( gulp.dest('dist/resources/img') )
    .pipe( browserSync.stream() );
});
