# SVG Storybook

### Environment

* First download or clone this repo :)
* Run npm install to install dev dependencies. Use sudo if needed.
```
npm install
```

You'll need to have Gulp installed. If you already have Gulp installed, you can skip the following line. It is as simple as running:
```
npm install -g gulp
```

During development mode, run the default task so you'll have watchers and browser sync. Simply do the following:
* Run gulp to start it up
```
gulp
```
* Try to modify html, scss and javascript files and see how the page gets updated with BrowserSync

### Static Files & Output

When you're ready to deploy, simply do the following:
* Run gulp deploy
```
gulp deploy
```
* All of the files you need will be in /dist with your images optimized, css compressed and js compressed

### Dialogue is customizable
```
/data/english.js
/data/espanol.js
```
