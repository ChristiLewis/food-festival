const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./assets/js/script.js",
        events: ".assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
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