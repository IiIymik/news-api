const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT_DEV_SERVE = 2828;

module.exports = {
    mode: 'development',
    devServer: {
        port: PORT_DEV_SERVE,
        hot: true,
        liveReload: false,
        open: true,
    },
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
            },
            {
                test: /\.css$/,
                use: [
        'style-loader',
        'css-loader'
      ]
        }
    ],
  },
    plugins: [

            new HtmlWebpackPlugin({
                template:'./public/index.html',
            })

    ]
};
