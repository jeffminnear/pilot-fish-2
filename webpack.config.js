const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            'app': path.resolve(__dirname, 'src/App.jsx')
        }
    }
}