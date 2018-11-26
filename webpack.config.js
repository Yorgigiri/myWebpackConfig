let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    fallback: 'style-loader',
                    allChunks: true,

                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }]

                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            title: 'Home page',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        stats: 'errors-only'
    }
};
