/* ====================================
    Copy
==================================== */
var gulp =  require('gulp');
var browserSync = require('browser-sync');
var config = require('../config.js').copy;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('copy', function() {
    gulp.src( config.src )
        .pipe(gulp.dest( config.dest ))
        .pipe(browserSync.reload({stream:true}));
});
