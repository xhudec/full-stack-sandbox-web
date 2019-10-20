/* eslint-disable */
require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = [
      ...(config.plugins || []),

      new Dotenv({
        path: path.join(__dirname, '.env'),
      }),
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'components'),
      '@hooks': path.join(__dirname, 'hooks'),
      '@modules': path.join(__dirname, 'modules'),
      '@test': path.join(__dirname, 'test'),
      '@theme': path.join(__dirname, 'theme'),
      '@utils': path.join(__dirname, 'utils'),
    }

    return config
  },
}
