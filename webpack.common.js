const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        // main: "./app/src/test.js",
        // TODO agregar un script
    },

    plugins: [
        new HtmlWebpackPlugin({
            // template: "./app/src/test.html",
            // TODO agregar un template
        })
    ],


    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[ext]",
                        outputPath: "imgs",
                    }
                }
            },
        ]
    },

}