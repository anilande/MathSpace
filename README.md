### Quantas hotels
This is a node based application. using react.
NOTE: i timeboxed my self for 5 hrs but i took more than that to complete this assignement. and i belive for a good production level quality code i should take more time.
i didnt included external lib to keep it efficient and less dependences. the source code is hand written and not copy paste. just an explanation for justifying the time taken.
the implementation is ready for deployment as single page app. 

# Getting Started:
### Requirements: 
nodejs 6.5+, npm 3.10+ have been installded

### Install dependencies:
- project dependencies: `cd <project-dir> && npm install`

### build app
- run command 'webpack'

## run as single page app
1. uncomment line 35 in main.js
2. run command 'webpack'
3. start a web server inside static folder (python -m SimpleHTTPServer 8080)


### TODO:
- code commenting.
- make css more organised as well as implement css loader modules package
- minification and jslint implementation
- may be wrap it in docker container

## Notes
- the top nav arrow functionality is broken
- added card/page as carousel and provided carousel arrows to navigate
- i prefer to use sprites as image assets. but due to time constraints i didnt generated them. so i tried to use as less assets as possible.
- the app is responsive but can be made better
