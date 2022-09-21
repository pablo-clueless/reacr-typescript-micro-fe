const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { ModuleFederationPlugin } = webpack.container
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const deps = require('./package.json').dependencies
const path = require('path')
require('dotenv').config({path: './env'})

const buildDate = new Date().toLocaleString()

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    console.log({isProduction})
    return {
        entry: './src/index.ts',
        mode: process.env.NODE_ENV || 'development',
        devServer: {
            port: 3000,
            open: true,
            headers: { "Access-Control-Allow-Origin": "*" },
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                '@babel/preset-env',
                                { targets: { browsers: 'last 2 versions' } },
                            ],
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            ['@babel/plugin-proposal-class-properties', { loose: true }]
                        ],
                    },
                },
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, 'src'),
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                }
            ],
        },
        plugins: [
            new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
            new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env)}),
            new ModuleFederationPlugin({
                name: 'container',
                remotes: {
                    // can be added as env variables
                    app1: 'app1@http://localhost:3001/remoteEntry.js',
                    app2: 'app2@http://localhost:3002/remoteEntry.js',
                },
                shared: {
                    ...deps,
                    react: { singleton: true, eager: true, requiredVersion: deps.react },
                    'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom']},
                },
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
    }
}