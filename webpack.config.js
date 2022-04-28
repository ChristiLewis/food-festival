const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./assets/js/script.js",
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "main.bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //ADD PLUGIN TO PUT A REPORT.HTML AS A NEW FILE IN THE DIST FOLDER
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
        })
    ],
    mode: 'development'

};