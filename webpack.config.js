module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // transpile js
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // inject CSS into DOM
          "css-loader", // handle @import/url
          "sass-loader" // compile SCSS to CSS
        ]
      }
    ]
  },
  entry: ['@babel/polyfill', __dirname + '/index.js'], // polyfill for ES2015+
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devServer: {
    contentBase: __dirname + '/build'
  }
}
