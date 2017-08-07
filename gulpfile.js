var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('browser-sync').create();


gulp.task('img', function () {
    return gulp.src('src/**/*.{svg,png,jpg}')
        .pipe(gulp.dest('dist'))
});

gulp.task('css:style', function () {
    return gulp.src('src/css/style.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream())
});


gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function () {
    return gulp.src('src/**/*.ttf')
        .pipe(gulp.dest('dist'))
});

gulp.task('js', function () {
    return gulp.src('src/js/main.js')
        .pipe(gulp.dest('dist/js'))
});


gulp.task('build', ['html', 'img', 'js', 'fonts', 'css:style']);

gulp.task('watch', ['build'], function () {
    sync.init({
        server: 'dist'
    });
    gulp.watch('src/css/**/*.css', ['css:style']);

    gulp.watch('src/*.html', ['html']);
    gulp.watch('dist/*.html').on('change', sync.reload);

});

gulp.task('default', ['watch']);

