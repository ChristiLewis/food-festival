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
    //DIRECT WEBPACK TO FIND IMAGE FILE EXTENSIONS - USE THE LOADERS ON THEM 
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name(file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function (url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
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