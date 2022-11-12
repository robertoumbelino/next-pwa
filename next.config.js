const runtimeCaching = require("next-pwa/cache")
const withPWA = require('next-pwa')({
  runtimeCaching
})

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public'
  }
})
