var 
	gulp         = require('gulp'), // Подключаем Gulp
	sourcemaps   = require('gulp-sourcemaps'); // Подключаем Sourcemaps
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
	plumber      = require('gulp-plumber'); //Отслеживания ошибок

	mainpath     = '../';
	mainfolder   = 'SitePrp-bootstrap/app';




gulp.task('sass', function(){ // Создаем таск Sass для разработчика с соурсмап
	return gulp.src(mainpath + mainfolder +'/sass/**/*.scss') // Берем источник
		.pipe(plumber({
      errorHandler: function (err) {
        console.log(sass.logError);
        this.emit('end');
      }
    }))
  	// .pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init({loadMaps: true})) //sourcemaps init
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) //Стиль преобразования
		.pipe(autoprefixer(["last 4 version", 'ie 8', 'ie 9', '> 5%'], { cascade: false })) // Создаем префиксы

		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(mainpath + mainfolder +'/css')) // Выгружаем результата в папку ../'+ mainfolder +'/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});






gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: mainpath + mainfolder // Директория для сервера - app
		},
		open: false, // Не открывать браузер при запуске
		port: 8080, // Порт
		notify: false, // Отключаем уведомления
	});
});



gulp.task('watch', ['browser-sync'], function() {
	gulp.watch(mainpath + mainfolder +'/sass/**/*.scss',  

	function(event, cb) {
     gulp.start('sass');
   }); // Наблюдение за sass файлами в папке sass
	gulp.watch(mainpath + mainfolder +'/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch(mainpath + mainfolder +'/js/**/*.js', browserSync.reload)  // Наблюдение за JS файлами в папке js
});





gulp.task('default', ['watch'])
