const mock = require('./mock')
// const fs = require('fs')
// const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    port: 8080,
    before: function (app) {
      // mockFromFile(app)
      mockFromMock(app)
    }
  }
}

// const mockFromFile = (app) => {
//   const dir = 'mock'
//   const files = fs.readdirSync(path.join(__dirname, dir))
//   files.forEach(file => {
//     const reqUrl = '/' + file.split('.')[0]
//     app.use(reqUrl, function (req, res) {
//       res.json(JSON.parse(fs.readFileSync(path.join(dir, file)).toString()))
//     })
//   })
// }

const mockFromMock = (app) => {
  app.use('/categary', (req,res) => {
    res.json(mock.categary)
  })
}
