const gulp = require('gulp'),
	  pug  = require('gulp-pug');


gulp.task('pug', () => {
	gulp.src('dev/views/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('./dist/'))
});

gulp.task('default', () => {
	gulp.watch('./dev/views/**/*pug', ['pug']);
});