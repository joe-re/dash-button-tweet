module.exports = {
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    'main/index': './src/main/index.js',
    'renderer/app': './src/renderer/app.jsx'
  },
  output: {
    filename: 'dist/[name].js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css?modules' ]
      }
    ]
  },
  devtool: 'source-map'
};
