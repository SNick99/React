const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            },

            {
                test: /\.less|\.css$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 3000,
        historyApiFallback: true

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};