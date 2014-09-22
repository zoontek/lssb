var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass   = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var shrink = require('gulp-cssshrink');
var svgmin = require('gulp-svgmin');

gulp.task('css', function() {
    return gulp.src('./src/scss/lssb.scss')
        .pipe(sass())
        .pipe(prefix({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(shrink())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
    return gulp.src('./src/js/lssb.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('svg', function() {
    return gulp.src('./src/svg/*.svg')
        .pipe(gulp.dest('./dist/svg'))
        .pipe(svgmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('./dist/svg'))
});

gulp.task('default', ['css', 'js', 'svg']);
