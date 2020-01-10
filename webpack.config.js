module.exports = {
    mode: "production",
    output: {
        filename: "mouse-helper.js"
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader",
                options: {
                    injectType: 'singletonStyleTag',
                    attributes: {
                        component: "mouse-helper"
                    }
                }
            }, {
                loader: "css-loader"
            }]
        }]
    }
}