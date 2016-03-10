# __`app-template`__ — structure for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

__`app-template`__ contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

The app doesn't do much, just shows how to wire two controllers and views together.

This project is built upon [angular-seed](https://github.com/angular/angular-seed) from good guys AngularJS team.

## Getting Started

To get you started you can simply clone the `app-template` repository and install the dependencies:

### Prerequisites

- Git
- Node.js and tools (`npm`, `bower`,...)

### Clone app-template

Clone the `app-template` repository using `git`:

```bash
git clone https://github.com/at-hungbcp/angular-app-template.git
cd angular-app-template
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code.  The tools help us manage and test the application.

- We get the tools we depend upon via `npm`.
- We get the Angular code via `bower`.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```bash
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new folders in your project.

- `node_modules` - contains the npm packages for the tools we need
- `app/bower_components` - contains the angular framework files

_Note that the `bower_components` folder would normally be installed in the root folder but `app-template` changes this location through the `.bowerrc` file.  Putting it in the app folder makes it easier to serve the files by a webserver._

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start this server is:

```bash
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.

## Commits / Tutorial Outline

You can check out any point of the tutorial using
```bash
git checkout step-?
```

To see the changes which between any two lessons use the git diff command.
```bash
git diff step-?..step-?
```

### `step-1`

- Define your app and its properties

### `step-2`

- Create app structure, give it some bones

### `step-3`

- Our app already have bones but lack of flesh, now it's time :smile:
  - Dependence modules
  - Routing
  - Controllers
  - Views

### `step-4`

- So, the app is alive, but, is it living well? We create test suite...
  - Unit Testing
  - End-to-End Testing

## Directory Layout

```
app/                           --> all of the source files for the application
  index.html                   --> app layout file (the main html template file of the app)
  css/                         --> all app stylesheets
    app.css                    --> default stylesheet
  js/                          --> all app business logics
    app.js                     --> main application module
    controllers.js             --> the controller logic
    directives.js              --> custom directives
    filters.js                 --> custom filters
    services.js                --> custom services
  view/                        --> the view template
    home.html                  --> the partial template for home page
    about.html                 --> the partial template for about page

test/                          --> all tests
  protractor.conf.js           --> Protractor config file
  karma.conf.js                --> config file for running unit tests with Karma
  e2e/                         --> end-to-end tests
    scenarios.js               --> end-to-end scenarios to be run by Protractor
  unit/                        --> unit tests
    controllers.js             --> test cases of the controller
    directives.js              --> test cases of custom directives
    filters.js                 --> test cases of custom filters
    services.js                --> test cases of custom services
```

## Testing

There are two kinds of tests in the `app-template` application: Unit tests and End to End tests.

### Running Unit Tests

The app comes preconfigured with unit tests. These are written in [Jasmine](http://jasmine.github.io/), which we run with the [Karma](https://kama-runner-github.io/). We provide a Karma configuration file to run them.

- The configuration is found at `test/karma.conf.js`
- The unit tests are found in `test/unit/controllers.js`

The easiest way to run the unit tests is to use the supplied npm script:

```bash
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change. This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to check that a particular version of the code is operating as expected.  The project contains a predefined script to do this:

```bash
npm run test-single-run
```

### End to end testing

The `app-template` app comes with end-to-end tests, again written in Jasmine. These tests are run with the [Protractor](http://www.protractortest.org/) End-to-End test runner.  It uses native events and has special features for Angular applications.

- The configuration is found at `test/protractor.conf.js`
- The end-to-end tests are found in `test/e2e/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it.

```bash
npm start
```

In addition, since Protractor is built upon [WebDriver](http://www.seleniumhq.org/projects/webdriver/) we need to install this.  The `app-template` project comes with a predefined script to do this:

```bash
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```bash
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the development server.

## Updating Angular

Previously we recommended that you merge in changes to `app-template` into your own fork of the project. Now that the angular framework library code and tools are acquired through package managers (npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```bash
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```bash
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that don't require a backend server at all, we recommend serving the project files using a local webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The `app-template` project comes preconfigured with a local development webserver.  It is a Node.js tool called [http-server](https://www.npmjs.com/package/http-server). You can start this webserver with `npm start` but you may choose to install the tool globally:

```bash
npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```bash
http-server ./app -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as Apache or nginx. Just configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but the general rule is that all you need in production are all the files under the `app/` directory. Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure out what is the best way to host the static files to comply with the same origin policy if applicable. Usually this is done by hosting the files by the backend server or through reverse-proxying the backend server(s) and webserver(s).

## More

For more information on AngularJS please check out [http://angularjs.org/](http://angularjs.org/)

- `git`: http://git-scm.com/
- `bower`: http://bower.io
- `npm`: https://www.npmjs.org/
- `node`: http://nodejs.org
- `protractor`: https://github.com/angular/protractor
- `jasmine`: http://jasmine.github.io
- `karma`: http://karma-runner.github.io
- `http-server`: https://github.com/nodeapps/http-server
