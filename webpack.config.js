const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(jpeg|jpg|png|svg)$/i,
            type: 'asset/resource'
         }
      ],
   },
   resolve: {
      extensions: ['.css', '.js', '.jsx']
   },
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
   },
   plugins: [
      new HTMLWebpackPlugin({
         title: 'Development',
         template: './src/index.html'
       }),
   ],
};