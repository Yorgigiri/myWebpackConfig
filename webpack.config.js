let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './src/index.js',

    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    entry: {
        homePage: './src/pages/homePage/index.js',
        pageOne: './src/pages/pageOne/index.js',
        pageTwo: './src/pages/pageTwo/index.js'
    },

    output: {
        // path: __dirname + '/dist/pages'
        path: path.resolve(__dirname, './dist/pages'),
        // filename: '[name].js',
        filename: './../js/[name].js',
        publicPath: ''
        
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
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
            filename: 'homepage/index.html',
            template: './src/pages/homePage/index.html',
            chunks: ['homePage']
        }),
        new HtmlWebpackPlugin({
            title: 'Page One',
            filename: 'pageone/index.html',
            template: './src/pages/pageOne/index.html',
            chunks: ['pageOne']
        }),
        new HtmlWebpackPlugin({
            title: 'Page Two',
            filename: 'pagetwo/index.html',
            template: './src/pages/pageTwo/index.html',
            chunks: ['pageTwo']
        })
    ],
    devServer: {
        stats: 'errors-only'
    }
};
