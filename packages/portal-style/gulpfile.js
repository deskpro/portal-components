// Initialize modules
//https://github.com/thecodercoder/frontend-boilerplate/blob/master/gulpfile.js
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const {
  src,
  dest,
  watch,
  series,
  parallel
} = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const connect = require('gulp-connect');
const cors = require('cors');
const ejs = require("gulp-ejs");
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// File paths
const files = {
  scssPath: 'src/**/*.scss',
  srcAssetsPath: 'src/assets/**/*',
  websitePath: 'website/**/*.ejs',
  websiteStaticPath: 'website/static/**/*',
  websiteStaticImgPath: 'website/static/img/**/*'
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass({
      includePaths: [require('path').resolve(__dirname, 'node_modules')]
    })) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('.build/portal-components/portal-style/dist')) // put final CSS in dist folder
    .pipe(dest('dist')) // put final CSS in dist folder
    .pipe(connect.reload());
}

// style static assets
function styleAssetsTask() {
  return src(files.srcAssetsPath)
    .pipe(dest('.build/portal-components/portal-style/dist/assets'))
    .pipe(connect.reload());
}

// compiles ejs templates into website
function ejsTask() {
  return src(files.websitePath)
    .pipe(ejs())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(dest('.build/portal-components/portal-style'))
    .pipe(connect.reload());
}

// website static assets
function websiteStaticTask() {
  return src(files.websiteStaticPath)
    .pipe(dest('.build/portal-components/portal-style/static'))
    .pipe(connect.reload());
}

// website static assets
function websiteStaticImgTask() {
  return src(files.websiteStaticImgPath)
    .pipe(dest('.build/portal-components/portal-style/dist/img'))
    .pipe(dest('dist/img'))
    .pipe(connect.reload());
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch([files.scssPath], parallel(scssTask));
  watch([files.websitePath], parallel(ejsTask));
  watch([files.websiteStaticPath], parallel(websiteStaticTask));
  watch([files.srcAssetsPath], parallel(styleAssetsTask));
  watch([files.websiteStaticImgPath], parallel(websiteStaticImgTask));
}

// Server task for local web dev
function serverTask() {
  connect.server({
    port: 3000,
    livereload: true,
    root: ".build",
    localhost: 'localhost',
    https: process.env.HTTPS,
    middleware: function() {
      return [cors()];
    }
  });
}

exports.dev = series(
  parallel(scssTask, ejsTask, websiteStaticTask, styleAssetsTask, websiteStaticImgTask),
  parallel(watchTask, serverTask)
);

exports.default = series(
  parallel(scssTask, ejsTask, websiteStaticTask, styleAssetsTask, websiteStaticImgTask)
);
