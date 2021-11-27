/* 
  - A chave "entry" busca pelo o arquivo que irar ser empacotado
  - A chave "output" define o local aonde o arquivo empacotado ficará
    com o nome em "filename"
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  /* 
  - É preciso essa config para o webpack ler javascript
  */
  module:{
    rules:[
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ]
}