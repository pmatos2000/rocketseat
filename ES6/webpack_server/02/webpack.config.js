module.exports = {
    entry: "./main.js", //Arquivo principal
    output: {
        path: __dirname,
        filename: "bundle.js",
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