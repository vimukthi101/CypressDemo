import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '88i22b',
  e2e: {
    baseUrl: 'https://www.lambdatest.com/selenium-playground',
    video: true,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
    retries: 1,
    defaultBrowser: 'chrome',
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: 'cypress/report/mochawesome-report',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
