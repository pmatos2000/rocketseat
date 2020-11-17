var path = require('path');

module.exports = {
    entry: "./src/main.js", //Arquivo principal
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
}