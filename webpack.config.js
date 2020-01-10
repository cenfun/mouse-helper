module.exports = {
    mode: "production",
    //mode: "development",
    output: {
        filename: "mouse-helper.js",
        umdNamedDefine: true,
        library: "mouse-helper",
        libraryTarget: "umd"
    },
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