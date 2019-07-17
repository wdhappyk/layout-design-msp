const gulp = require('gulp');

const webserver = require('gulp-webserver');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const pug = require('gulp-pug');

const plumber = require('gulp-plumber');


gulp.task('default', ['webserver', 'pug:watch', 'scss:watch']);

gulp.task('webserver', function () {
    gulp.src(['./', '!./scss/**/*.scss', '!./view/**/*.pug'])
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('scss', function () {
    return gulp.src(['!./scss/bootstrap/**/*.scss', './scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('scss:watch', ['scss'], function () {
    gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task('pug', function() {
    return gulp.src([
        './view/**/*.pug',
        '!./view/**/includes/**/*.pug',
        '!./view/**/layout.pug'
    ])
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('pug:watch', ['pug'], function() {
    gulp.watch('./view/**/*.pug', ['pug']);
});