var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task(
    'serve', 
    function () {
        nodemon(
            {
                script: 'src/js/server.js', 
                ext: 'js html', 
                env: { 
                    'NODE_ENV': 'development' 
                }
            }
        );
    }
);
