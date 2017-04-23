module.exports = {
  rules: [
    {
      test: /\.js?$/,
      use: [
        'babel-loader'
      ],
      exclude: /(node_modules|public)/,
    },
    { 
      test: /\.css$/, 
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    { 
      test: /\.(png|eot|svg|ttf|woff|woff2)$/,
      use: [
        'file-loader'
      ]
    }
  ]
}
