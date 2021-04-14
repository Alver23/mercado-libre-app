// Dependencies
const dotenv = require('dotenv');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const shell = require('gulp-shell');
const sonarqubeScanner = require('sonarqube-scanner');
const package = require('./package.json');

dotenv.config();

const sonarOptions = {
  'sonar.host.url': process.env.SONARQUBE_HOST_URL,
  'sonar.login': process.env.SONARQUBE_TOKEN,
};

const PATHS = {
  server: ['./src/server', './src/shared'],
  tsconfig: './tsconfig.server.json',
};

gulp.task('sonarqube', callback => {
  sonarqubeScanner(
    {
      options: sonarOptions,
    },
    callback
  );
});


gulp.task('server:ts', (done) => {
  const tsProject = ts.createProject(PATHS.tsconfig);
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
    .on('error', (error) => done(error))
    .on('end', () => done());
});

gulp.task('server:watch', (done) => {
  const stream = nodemon({
    script: 'build/server/index.js',
    env: { NODE_ENV: 'development' },
    ext: 'ts',
    watch: PATHS.server,
    tasks: ['server:ts'],
    stdout: true,
  });
  return stream.on('quit', function () {
    done();
  });
});

gulp.task('server:build:clean', shell.task('rm -rf build .next'));
gulp.task('nextBuild', shell.task('next build'));

gulp.task('server:build', gulp.series('server:build:clean', 'nextBuild', 'server:ts'));
gulp.task('server:dev', gulp.series('server:build:clean', 'server:ts', 'server:watch'));
