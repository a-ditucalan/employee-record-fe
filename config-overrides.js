// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = function override(config) {
  config.module.rules[1].use[0].options.configFile = './.eslintrc.json'
  config.module.rules[1].use[0].options.fix = true
  config.plugins.push(
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      fix: true
    })
  )

  return config
}
