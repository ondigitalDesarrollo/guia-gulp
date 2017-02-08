const gulp = require('gulp');

// Methods
/*

	Tareas
 	gulp.task();

 	Ruta de origen
 	gulp.src('./origen'):

	Ruta del destino
	gulp.dest();

	Escuchas
	gulp.watch();
*/

gulp.task('convertir', () => 
	// Ruta de origen
	gulp.src('./origen')
	.pipe(plugin1)
	.pipe(plugin2)
	.pipe(plugin3)
	.pipe(gulp.dest('./detino'));
);

gulp.task('default', () => {
	gulp.watch('./origen', ['convertir']);
});

gulp.watch('./directorio', ['tarea', 'tarea2']);