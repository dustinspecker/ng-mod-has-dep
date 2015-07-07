'use strict';
import babel from 'gulp-babel';
import babelCompiler from 'babel';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';
import mocha from 'gulp-mocha';

const srcFiles = 'src/*.js'
  , testFiles = 'test.js'

  , destDir = './lib/';

gulp.task('clean', (cb) => {
  del(destDir, cb);
});

gulp.task('lint', () => {
  return gulp.src([srcFiles, testFiles])
    .pipe(eslint())
    .pipe(eslint.formatEach('./node_modules/eslint-path-formatter'))
    .pipe(eslint.failOnError())
    .pipe(jscs({
      esnext: true
    }))
    .pipe(jshint());
});

gulp.task('compile', ['clean', 'lint'], () => {
  return gulp.src(srcFiles)
    .pipe(babel({
      auxiliaryCommentBefore: 'istanbul ignore next',
      modules: 'common'
    }))
    .pipe(gulp.dest(destDir));
});

gulp.task('test', ['compile'], (cb) => {
  gulp.src([destDir + '*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src([testFiles])
        .pipe(mocha({
          compilers: {
            js: babelCompiler
          }
        }))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
