exports.config = {
  runner: "local",
  specs: ["./tests/features/*cart.feature"],

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  
  maxInstances: 5,

  maxInstancesPerCapability: 1,
  
  capabilities: [
    {
      // maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  
  ],
  
  logLevel: "error",

  bail: 0,

  baseUrl: "https://www.saucedemo.com",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // The number of times to retry the entire specfile when it fails as a whole
  specFileRetries: 0,
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  specFileRetriesDeferred: false,

  services: ["chromedriver"],
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ["spec"],
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    "cucumberautocomplete.steps": [
      "test/features/step_definitions/*.js",
      "node_modules/qa-lib/src/step_definitions/*.js",
    ],
    "cucumberautocomplete.strictGherkinCompletion": true,
    require: ["./tests/stepDefinitions/*.js"],

    // <boolean> show full backtrace for errors
    backtrace: false,

    requireModule: [],

    // <boolean> invoke formatters without executing steps
    dryRun: false,

    // <boolean> abort the run on first failure
    failFast: false,

    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],

    // <boolean> disable colors in formatter output
    colors: true,

    // <boolean> hide step definition snippets for pending steps
    snippets: true,

    // <boolean> hide source uris
    source: true,

    // <string[]> (name) specify the profile to use
    profile: [],

    // <boolean> fail if there are any undefined or pending steps
    strict: false,

    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "not @pending",

    // <number> timeout for step definitions
    timeout: 60000,

    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,

    // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
    scenarioLevelReporter: false,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // before: function () {
  //   // const chai = require('chai');
  //   // global.expect = chai.expect;
  // },

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Runs before a Cucumber feature
   */
  // beforeFeature: function (uri, feature, scenarios) {
  // },
  /**
   * Runs before a Cucumber scenario
   */
  // beforeScenario: function (uri, feature, scenario, sourceLocation) {
  // },
  /**
   * Runs before a Cucumber step
   */
  // beforeStep: function (uri, feature, stepData, context) {
  // },
  /**
   * Runs after a Cucumber step
   */
  // afterStep: function (uri, feature, { error, result, duration, passed }, stepData, context) {
  // },
  /**
   * Runs after a Cucumber scenario
   */
  // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
  // },
  /**
   * Runs after a Cucumber feature
   */
  // afterFeature: function (uri, feature, scenarios) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
