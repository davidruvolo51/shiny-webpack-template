////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.common.js
// AUTHOR: David Ruvolo
// CREATED: 2020-04-12
// MODIFIED: 2021-10-09
// PURPOSE: configuration to be used in prod and dev
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "..", "inst/www/"),
        filename: "index.js",
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css",
            ignoreOrder: false,
        }),
        // new HtmlWebpackPlugin({
        //     template: "src/index.js",
        //     filename: "index.html",
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // write to file
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         publicPath: "./inst/www/"
                    //     }
                    // },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Processes via PostCSS
                    "postcss-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            // use fonts
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         "file-loader"
            //     ]
            // },
            // use images
            {
                test: /\.(png|svg|jpg|gif)$/i,
                loader: "file-loader",
                options: {
                    publicPath: "./src/images/",
                    outputPath: "./inst/www/"
                }
            },
        ]
    }
}
