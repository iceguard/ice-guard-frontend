const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    distDir: '../../dist/functions/next',
    cssModules: true,
})
