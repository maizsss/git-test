/**
 * Created by Administrator on 2015/12/4.
 */

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'); //本地安装gulp所用到的地方
//var plumber = require('gulp-plumber'); //捕获处理任务中的错误
var less = require('gulp-less');//less编译
//var jshint = require('gulp-jshint');//语法检查
var concat = require('gulp-concat');//合并文件
var uglify = require('gulp-uglify');//压缩js代码
var minifycss = require('gulp-minify-css'); //压缩css代码
var rename = require('gulp-rename');//重命名

//lessToCss
gulp.task('lessToCss', function () {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

// 合并文件之后压缩代码
gulp.task('minifycss',['lessToCss'], function (){
    return gulp.src('./dist/css/style.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifycss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

// 语法检查
/*gulp.task('jshint', function () {
    return gulp.src('js/!*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});*/

//minJS
gulp.task('minJS', function (){
    return gulp.src([
            './src/js/custom.js',
            './src/js/index.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'));

});

var watcher = gulp.watch('css/*.css', [minifycss]);
watcher.on('change', function (){
    console.log('arg:',arguments);
});
// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch(['./src/less/*.less', './src/js/*.js'], ['lessToCss', 'minifycss', 'minJS']);
});

// 注册缺省任务
gulp.task('default', ['lessToCss', 'minifycss']);

