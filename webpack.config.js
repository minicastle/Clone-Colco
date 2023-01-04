const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test:/\.html?/,
                loader:'html-loader',
                options:{
                    minimize:true
                }
            }
        ]
    },
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundel.js'
    },
    plugins:[
        new HtmlWebpackPlugin({template:'index.html'})
    ]
}