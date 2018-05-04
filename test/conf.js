// conf.js
exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    '*_test.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },
  onPrepare: function () {
         browser.driver.manage().window().setSize(1680, 1050);
      }
}
