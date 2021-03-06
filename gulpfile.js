var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

var browserSync = require("browser-sync").create()

var imagemin = require("gulp-imagemin")

gulp.task("sass", function () {
    return gulp.src("src/css/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            cleanCss({
                compatibility: 'ie8'
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream())
})

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
})

gulp.task("images", function () {
    return gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
})

gulp.task("fonts", function () {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
})

gulp.task("js", function () {
    return gulp.src("src/scripts/*.js")
        .pipe(gulp.dest("dist"))
})

gulp.task("watch", function () {

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })

    gulp.watch("src/*.html", gulp.series("html")).on("change", browserSync.reload)
    gulp.watch("src/css/app.scss", gulp.series("sass"))
    gulp.watch("src/img/*", gulp.series("images"))
    gulp.watch("src/fonts/*", gulp.series("fonts"))
    gulp.watch("src/scripts/*.js", gulp.series("js")).on("change", browserSync.reload)

})

gulp.task('default', gulp.series("html", "sass", "images", "fonts", "js", "watch"));