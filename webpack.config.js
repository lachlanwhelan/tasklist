const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    mode: 'production',
    
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        publicPath: '/'
    },

    //devtool: 'source-map',
    devtool: false,

    devServer: {
        static: './dist',
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },


    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Tasklist'
        })
    ]
}