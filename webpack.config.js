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
            use: {
                loader: "raw-loader",
                options: {
                    esModule: false
                }
            }
        }]
    }
};