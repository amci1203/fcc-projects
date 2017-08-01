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
        notify : false,
        proxy  : 'localhost:3000'
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

gulp.task('watch-no-browser', ['scripts', 'css'], () => {
    watch('./app/css/**/*.css', function () {
        gulp.start('cssInject');
    });
    watch('./app/js/app.js', function () {
        gulp.start('scriptsRefresh');
    })
    watch('./public/index.html', function () {
        browserSync.reload();
    });
})
