const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
    experimentalStudio:true,
    supportFile:'cypress/support/e2e.js'
  },
});
