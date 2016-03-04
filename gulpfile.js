/**
 * Created by Administrator on 2015/12/4.
 */

//���빤�߰� require('node_modules���Ӧģ��')
var gulp = require('gulp'); //���ذ�װgulp���õ��ĵط�
//var plumber = require('gulp-plumber'); //�����������еĴ���
var less = require('gulp-less');//less����
//var jshint = require('gulp-jshint');//�﷨���
var concat = require('gulp-concat');//�ϲ��ļ�
var uglify = require('gulp-uglify');//ѹ��js����
var minifycss = require('gulp-minify-css'); //ѹ��css����
var rename = require('gulp-rename');//������

//lessToCss
gulp.task('lessToCss', function () {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

// �ϲ��ļ�֮��ѹ������
gulp.task('minifycss',['lessToCss'], function (){
    return gulp.src('./dist/css/style.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(minifycss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/css'));
});

// �﷨���
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
// �����ļ��ı仯
gulp.task('watch', function () {
    gulp.watch(['./src/less/*.less', './src/js/*.js'], ['lessToCss', 'minifycss', 'minJS']);
});

// ע��ȱʡ����
gulp.task('default', ['lessToCss', 'minifycss']);

