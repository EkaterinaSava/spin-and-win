# Spin & Win

Верстка тестового задания

---

Project based on gulp, pug and postcss workflow.

## Install
*If you don't have Node.js, install it from
[official site](https://nodejs.org/en/)*

*If you don't have gulp.js, install it, by running `npm install -g gulp`
in your terminal.*

If Node.js and gulp.js are installed run the following:

Action | Command
:--- | :---
clone repository | `git clone git@github.com:EkaterinaSava/spin-and-win.git`
enter project folder | `cd spin-and-win`
install dependencies | `npm install`
start work | `gulp`
stop gulp-watcher | `[ ctrl+c ]`

add files  | `git add .`
commit your changes  | `git commit -m 'add new styles for catalog'`
push it on remote | `git push origin layout`

after installing, you can run tasks, described below

## Tasks

### Primary tasks

Command | Task
:--- | :---
`gulp build` | build /dist from /src
`gulp watch` | build, then watch for changes in /src and automatically run secondary tasks (below) to process these changes
`gulp` | build, run [localhost:3000](http://localhost:3000/) and watch for changes

### Secondary tasks

Command | Task
:--- | :---
`gulp html` | compile .pug to .html
`gulp css` | concatenate .css, process with postcss processors and create source-map
`gulp js` | copy .js to /dist without changes
`gulp img` | optimize images
`gulp icons` | build svg-sprite from separate svg-icons
`gulp temp` | copy temporarily files to /dist without changes

### Support tasks

Command | Task
:--- | :---
`gulp ftp` | upload /dist to ftp (don't forget to provide credentials and upload address in section **variables** in gulpfile.js) —— depricated —— (no ftp for this project)
`gulp server` | run [localhost:3000](http://localhost:3000/)
`gulp clean` | clean /dist
