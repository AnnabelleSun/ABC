var gulp = require('gulp');
var webserver = require('gulp-webserver');
var Mock = require('mockjs');

var obj = Mock.mock({
    'bread-line': ['@string', '@string'],
    'time': '@time',
    'service-title': '@string',
    'icon': ['@string', '@string', '@string', '@string', '@string', '@string', '@string', '@string']
});
console.log(obj);

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            middleware: function (req, res, next) {
                var obj = {
                    'bread-line': ['全国——农业银行银联白金卡超强', '全国——农业银行银联白金卡超强'],
                    'time': '2017/11/30',
                    'service-title': '便捷服务',
                    'icon': ['掌上银行', '掌上银行', '掌上银行', '掌上银行', '掌上银行', '掌上银行', '掌上银行', '掌上银行']
                };
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(JSON.stringify(obj));
            }
        }))
});

gulp.task('ajaxserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 9090,
            fullback: './index.html'
        }));
});

gulp.task('default', ['webserver', 'ajaxserver']);