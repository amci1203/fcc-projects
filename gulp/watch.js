const gulp        = require('gulp'),
      watch       = require('gulp-watch'),
      browserSync = require('browser-sync').create();

gulp.task('default', function () {
    gulp.start('watch');
})

gulp.task('cssInject', ['css'], function () {
    return gulp.src('./public/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
    browserSync.reload();
})

gulp.task('watch', ['scripts', 'css'], function () {
    browserSync.init({
	open   : false,
        notify : false,
        proxy  : 'localhost:8080'
    });
    watch('./app/css/**/*.css', function () {
        gulp.start('cssInject');
    });
    watch('./app/js/app.js', function () {
        gulp.start('scriptsRefresh');
    })
    watch('./public/index.html', function () {
        browserSync.reload();
    });
});
