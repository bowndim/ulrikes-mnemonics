// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // IMPORTANT: base path when served on GitHub Pages
  // (repo is named "ulrikes-mnemonics", so this must match)
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ulrikes-mnemonics/'
    : '/',

  // Build the static site into /docs so Pages can serve it
  outputDir: 'docs',

  // (optional) keep static assets under a folder
  // assetsDir: 'assets',
})

