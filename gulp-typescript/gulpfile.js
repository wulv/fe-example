var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var dts_gen = require('dts-generator').default;

gulp.task("default", function () {
    var exec = require('child_process').exec;
    var cmd = 'node ./node_modules/dts-generator/bin/dts-generator --name myproject --baseDir src/ --project ./ --out typings/myproject.d.ts';
    exec(cmd, function(error, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
    });
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});