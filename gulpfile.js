var bower = require('gulp-bower');
    browserify = require('browserify'),
    glob = require('glob'),
    gulp = require('gulp'),
    gutil = require('gulp-util');
    minify = require('html-minifier').minify,
    nodemon = require('gulp-nodemon'),
    replace = require('gulp-replace'),
    source = require('vinyl-source-stream'),
    transform = require('vinyl-transform'),
    fs = require('fs'),
    path = require('path'), 
    watchify = require('watchify');

gulp.task('init', ['bower', 'browserify']);

gulp.task('bower', function() {
   
    return bower().pipe(gulp.dest('src/js/client/bower_components'))
    
});
    
/**
 * Task used to create the client Javascript file using Browserify. The produced file will be stored in 
 * 'src/client/bundle.js'.
 */
gulp.task(
    'browserify', 
    ['inline-templates'], 
    function() {
        
        return browserify(
            {
                entries: ['tmp/bootstrap.js'],
                debug: true
            }
        ).bundle()
        
        // Log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('src/js/client'));
        
    }
);

/**
 * Task used to inspect all "require('*.tpl')" calls in the source code and replace those calls by a string with the 
 * template content.
 */
gulp.task(
    'inline-templates', 
    function() {
        
        var stream = gulp.src(['src/js/common/views/**/*.js'])
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
        
        return stream;

    }
);

gulp.task(
    'serve', 
    function () {
        nodemon(
            {
                cwd: 'src/js/server',
                script: 'server.js', 
                ext: 'js html', 
                env: { 
                    'NODE_ENV': 'development' 
                }
            }
        );
    }
);

gulp.task(
    'watch', 
    function() {
        
        var templateWatcher = gulp.watch('src/js/common/views/**/*', ['inline-templates']);
        
        var browserified = browserify(
            {
                entries: ['tmp/bootstrap.js'],
                debug: true
            }
        );
        var watchifiedBrowserified = watchify(browserified); 
        var watchifiedBrowserifiedBundle = createBundle(); 

        watchifiedBrowserified.on('update', createBundle); 
        watchifiedBrowserified.on('log', gutil.log);
        
        function createBundle() {
        
            return watchifiedBrowserified
                .bundle()
                    
                // Log errors if they happen
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source('bundle.js'))
                .pipe(gulp.dest('src/js/client'));

        }

    }
);

