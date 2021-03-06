var path = require('path')

const PATH = {
  public: path.resolve(__dirname, 'public'),
  app: path.resolve(__dirname, 'app')
}

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl']
  },
  entry: {
    app: [
      PATH.app + '/stylus',
      PATH.app
    ]
  },
  output: {
    path: PATH.public,
    filename: '[name].js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      },
      {test: /\.(ttf|eot|svg)/, loader: 'url-loader'},
      {test: /\.(png|jpg|gif)/, loader: 'url-loader'}
    ]
  },

  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {allChunks: false})
  ]
}

module.exports = config
