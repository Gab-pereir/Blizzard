// Importa os módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Compila arquivos SASS em CSS
async function compilaSass() {
  const autoprefixer = await import('gulp-autoprefixer');
  return gulp.src('scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer.default({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);

function pluginsCSS(){
  return gulp.src('css/lib/*.css')
  .pipe(concat('plugin.css'))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginsCSS);

// Concatena e minifica arquivos JavaScript
function gulpJs() {
  return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('alljs', gulpJs);

// Concatena e processa arquivos de bibliotecas JavaScript específicos
function pluginJs() {
  return gulp.src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginJs);

// Inicializa o BrowserSync
function browser() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
}

gulp.task('browser-sync', browser);

// Observa mudanças nos arquivos
function watch() {
  gulp.watch('scss/*.scss', compilaSass);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('css/lib/*.css', pluginsCSS);
  gulp.watch('js/scripts/*.js', gulpJs);
  gulp.watch('js/lib/*.js', pluginJs); // Observa mudanças nos arquivos específicos de biblioteca
}

gulp.task('watch', watch);

// Tarefa padrão que executa várias tarefas em paralelo
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'alljs', 'pluginjs', 'plugincss'));
