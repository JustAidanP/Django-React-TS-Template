const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = [
    {
        entry: {
            frontend: './frontend/src/js/index.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'frontend/static/frontend'),
            publicPath: "/static/",
            filename: '[name].bundle.js',
            chunkFilename: "[id]-[chunkhash].js"
        },
        module: {
            rules: [
                {
                    // Include ts, tsx, js, and jsx files.
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
        ]
    }
]