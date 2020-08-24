let gulp = require("gulp");
let concat = require("gulp-concat");
let prefixer = require("gulp-autoprefixer");
let browser_sync = require("browser-sync");

let config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: false,
    port: 8080,
    single: true
};

gulp.task('build:js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build:css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(prefixer())
        .pipe(concat('template.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('build:img', function () {
    return gulp.src('src/assets/**/*.png')
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('build:icons', function () {
    return gulp.src('src/assets/**/*.svg')
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('build:html', function () {
    return gulp.src('src/index.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('dist'))
});

gulp.task('build', gulp.series('build:js', 'build:css', 'build:img', 'build:html', 'build:icons'));

gulp.task("project:watch", function () {
    browser_sync(config);
    gulp.watch('src/js/**/*.js', gulp.series("build:js", "build:js"));
    gulp.watch('src/css/**/*.css', gulp.series("build:css", "build:css"));
    gulp.watch('src/index.html', gulp.series("build:html", "build:html"));
    gulp.watch('src/assets/**/*.png', gulp.series("build:img"));
    gulp.watch('src/assets/**/*.svg', gulp.series("build:icons"));
});
