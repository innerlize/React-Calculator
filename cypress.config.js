const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com/'
  },
  env: {
    URL: 'http://localhost:3000/'
  }
})
