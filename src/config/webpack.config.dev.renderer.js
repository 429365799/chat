const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

function resolve(pathUnderRenderer) {
    return path.resolve(path.join(__dirname, '../renderer/', pathUnderRenderer))
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    // webpack dev server
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: [
        'babel-polyfill',
        require.resolve('./polyfills'),
        resolve('index.js'),
    ],
    output: {
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                include: resolve('.'),
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['env', 'react'],
                    plugins: [
                        require('react-hot-loader/babel'),
                        require('babel-plugin-transform-object-rest-spread'),
                        require('babel-plugin-transform-class-properties'),
                        require('babel-plugin-transform-decorators-legacy').default
                    ]
                }
            },
            {
                test: /\.s?css$/,
                include: resolve('.'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: "expanded",
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                exclude: [/\.(js|jsx|mjs)$/, /\.s?css$/, /\.html$/, /\.json$/],
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve('index.html'),
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        // Add module names to factory functions so they appear in browser profiler.
        new webpack.NamedModulesPlugin(),
        
    ]
}
console.log(resolve('index.html'));
