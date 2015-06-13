var gulp = require('gulp');
var minify = require('html-minifier').minify;
var nodemon = require('gulp-nodemon');
var replace = require('gulp-replace');
var fs = require('fs');
var path = require('path');

/**
 * Task used to inspect all "require('*.tpl')" calls in the source code and replace those calls by a string with the 
 * template content.
 */
gulp.task(
    'inline-templates', 
    function() {
        gulp.src(['src/js/views/**/*.js'])
            .pipe(replace(/require\(\'.*\.tpl\'\)/g, function(toBeReplaced, file) {
                
                // Extracts the template relative path
                var tplRelativePath = toBeReplaced.substring(9); 
                tplRelativePath = tplRelativePath.substring(0, tplRelativePath.length - 2);
                
                // Computes the template absolute path
                var tplAbsolutePath = path.join(path.dirname(file.path), tplRelativePath);
                
                // Gets the template content
                var tpl = fs.readFileSync(tplAbsolutePath, 'utf8');
                
                // Remove line breaks
                tpl = tpl.replace(/(\r\n|\n|\r)/gm,"")
                
                // Minify the template content
                tpl = minify(tpl, {
                    collapseWhitespace : true,
                    removeComments: true
                });
                    
                // Escapte quotes and double quotes    
                tpl = tpl.replace(/"/g, '\\"').replace(/'/g, "\\'");

                return '\'' + tpl + '\'';

            }))
            .pipe(gulp.dest('./tmp/views'));
    }
);

gulp.task(
    'serve', 
    function () {
        nodemon(
            {
                cwd: 'src/js',
                script: 'server.js', 
                ext: 'js html', 
                env: { 
                    'NODE_ENV': 'development' 
                }
            }
        );
    }
);
