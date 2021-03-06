'use strict';
import babel from 'gulp-babel';
import babelCompiler from 'babel-core';
import del from 'del';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import mocha from 'gulp-mocha';

const srcFiles = 'src/*.js'
  , testFiles = 'test.js'

  , destDir = './lib/';

gulp.task('clean', () => del(destDir));

gulp.task('lint', () => {
  return gulp.src([srcFiles, testFiles])
    .pipe(eslint())
    .pipe(eslint.failOnError())
});

gulp.task('compile', ['clean', 'lint'], () => {
  return gulp.src(srcFiles)
    .pipe(babel())
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
