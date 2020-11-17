module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"], //Arquivo principal
    output: {
        path: __dirname,
        filename: "./public/bundle.js",
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