import path from 'path';
import gulp from 'gulp';
import {argv} from 'yargs';
import template from 'gulp-template';
import rename from 'gulp-rename';

const root = 'src';

const paths = {
  template: {
    destination: path.join(root, 'components'),
    component: path.join('generator', 'component/*.js'),
    full: path.join('generator', 'full-component/*.js')
  }
};

gulp.task('component', () => {
  const cap = (val) => val.charAt(0).toUpperCase() + val.slice(1);
  const name = argv.name;
  return gulp.src(argv.full ? paths.template.full : paths.template.component)
    .pipe(template({
      upCaseName: cap(name)
    }))
    .pipe(rename((path) =>{
      path.basename = path.basename.replace('temp', cap(name));
    }))
    .pipe(gulp.dest(paths.template.destination));
});
