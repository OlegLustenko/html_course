import webpack from 'webpack';
import path from 'path';


export default {
  // context: __dirname,
  entry: {
    app: path.resolve(__dirname, './src/components/app'),
    vendor: ['react', 'redux', 'react-redux']
  },
  output: {
    path: path.resolve(__dirname, '../..'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: '../../',
    port: 3000
  }
}