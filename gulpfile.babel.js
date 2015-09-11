'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';

const testFiles = 'test/**/*.js';
const srcFiles = '{models,controllers}/**/*.js';
const allFiles = [ testFiles, srcFiles ];

gulp.task( 'test', done => {
  gulp.src( srcFiles )
    .pipe( istanbul() )
    .pipe( istanbul.hookRequire() )
    .on( 'finish', () => {
      gulp.src( allFiles )
      .pipe( mocha() )
      .on( 'error', done )
      .pipe( istanbul.writeReports() )
      .on( 'end', done );
    });
});

gulp.task(
  'default', [ 'test' ],
  () => gulp.watch( allFiles, [ 'test' ] )
);
