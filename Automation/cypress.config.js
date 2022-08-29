const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test.bitstarz.com/',
    "experimentalSessionAndOrigin": true
  },
  "chromeWebSecurity": false
})


