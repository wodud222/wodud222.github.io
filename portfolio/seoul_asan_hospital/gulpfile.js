//gulpfile.js

//gulp_setting


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync =require('browser-sync').create();
//var jade = require('jade')
// gulp.task : 임무를 부여
// gulp.src :  소스 위치
// gulp.dest : 컴파일 위치
// gulp.watch : 실시간 변환 확인 
// .pipe : 관(파이프)


gulp.task('default',function(){
   console.log('-------------------------');
   console.log('gulp 작동상태 이상없음');   
   console.log('-------------------------');   
}); //--> 확인용

gulp.task('sass',function(){
   return gulp.src('./scss/**/*.scss')
   .pipe(sass().on('error',sass.logError))
   //에러 명령어 보는란
   .pipe(gulp.dest('./css/src/')); //실제 한줄코드
});

gulp.task('watch',function(){
   gulp.watch('./scss/**/*.scss',['sass']); 
   gulp.watch('./dist'); 
});

gulp.task('browser-sync',function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});

//or...

// gulpt.task('browser-sync',function(){
//	browserSync.init({
//		proxy: "yourlocal.dev"
//	})
//});

gulp.task('default',['watch','browser-sync']);

