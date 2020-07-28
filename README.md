# NetworkAnalysisExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## About

A simple static site with a D3 Graph Network of web pages from an Information Retrieval course. Also some additional informatin about Zipf's Law and how this applies to graph networks.

Static site found here: phalax4.github.io/Network-Analysis-Example/

Additional Jupyter notebook example for loading graph data into neo4j using python, enabling further analysis:
    https://github.com/phalax4/Network-Analysis-Example/blob/master/SpideredToNeo4j.ipynb

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Github Pages Deployment

ng build --prod --aot=false --build-optimizer=false --base-href="/Network-Analysis-Example/"
ngh --dir dist/Network-Analysis-Example

## Migration
global install of latest angular cli
Initialize new angular-cli repository
copy over src folder
npm install on select libraries in package.json
replace polyfill.ts with generated one and add in only whats needed for certain libraries

## Credits
https://medium.com/@jeanphilippelemieux/creating-a-responsive-graph-with-angular-and-d3-b45bb8065588
https://github.com/keathmilligan/angular-d3js