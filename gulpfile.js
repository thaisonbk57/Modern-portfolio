const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('compile-sass', () => {
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('copyHtml', () => {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
})

gulp.task('scripts', () => {
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('watch', () => {
    gulp.watch('./src/sass/*.scss',['compile-sass']);
    gulp.watch('./src/*.html',['copyHtml']);
    gulp.watch('./src/js/main.js', ['scripts']);
});

gulp.task('default', ['compile-sass','copyHtml','scripts', 'watch']);