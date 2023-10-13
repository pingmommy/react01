module.exports = {
    mode: "development",
    entry: {
        alpha: "./src/alpha.jsx",
        blink: "./src/blink.jsx",
        table: "./src/table.jsx",
        table2: "./src/table2.jsx",
        fill: "./src/fill.jsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/src/main/webapp/js/react"
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        ]
    },


};
