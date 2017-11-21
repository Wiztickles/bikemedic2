var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var htmlhint = require("gulp-htmlhint");


// var globbingPaths = {
//     css: {
//         src: 'scss/*.scss',
//         dest: "css"
//     }
// };


gulp.task('sassy', function(){
	return gulp.src('css/main.scss')
	.pipe(sass( {outputStyle: 'compressed', precision:2, errLogToConsole:true } ))
	.on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
	.pipe(prefixer())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({stream:true}))
	.pipe(notify({ message: 'SCSS Compiled' }));
});




gulp.task('scripts', function () {
	return gulp.src('js/*.js')
	// .pipe(concat('all.js'))
	// .pipe(gulp.dest('js'))
	.pipe(browserSync.reload({stream:true}));
});

// gulp.task('styles', function () {
// return gulp.src('dev_css/*.css')
// .pipe(concat('all.css'))
// .pipe(gulp.dest('prod_css'))
// .pipe(browserSync.reload({stream:true}));
// });

gulp.task('browser-sync', function(){
	browserSync.init({
		server:{
		baseDir: "./",
	},
	browser:["google chrome"]
});

})

gulp.task('html-validate', function () {
	return gulp.src('*.html')
	.pipe(htmlhint())
	.pipe(htmlhint.reporter('htmlhint-stylish'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['browser-sync','scripts', 'html-validate', 'sassy'], function () {
	gulp.watch('js/*.js',["scripts"]);
	gulp.watch('*.html',["html-validate"]);
	gulp.watch('css/*.scss',["sassy"]);
});

gulp.task('default', ['watch']);