let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    // entry: './src/index.js',

    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },

    entry: {
        homePage: PATHS.src + '/pages/homePage/index.js',
        pageOne: PATHS.src + '/pages/pageOne/index.js',
        pageTwo: PATHS.src + '/pages/pageTwo/index.js'
    },
    output: {
        path: PATHS.dist,
        filename: 'js/[name].js'
    },

    // entry: {
    //     homePage: './src/pages/homePage/index.js',
    //     pageOne: './src/pages/pageOne/index.js',
    //     pageTwo: './src/pages/pageTwo/index.js'
    // },

    // output: {
    //     // path: __dirname + '/dist/pages'
    //     path: path.resolve(__dirname, './dist'),
    //     // filename: '[name].js',
    //     filename: './js/pages/[name].js',
    //     publicPath: ''

    // },

    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             test: /\.js(\?.*)?$/i,
    //         }),
    //     ],
    // },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            title: 'Home page',
            filename: 'index.html',
            chunks: ['homePage'],
            template: PATHS.src + '/pages/homePage/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'Page One',
            filename: 'pageOne.html',
            chunks: ['pageOne'],
            template: PATHS.src + '/pages/pageOne/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'Page Two',
            filename: 'pageTwo.html',
            chunks: ['pageTwo'],
            template: PATHS.src + '/pages/pageTwo/index.pug'
        })
    ],
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
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
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
    devServer: {
        stats: 'errors-only'
    }
};
