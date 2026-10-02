const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'oejimp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
