const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.join(__dirname, "src", "main.js"),
   mode: 'development',
   output: {
      path: path.resolve(__dirname, '/dist'),
   },
   devServer: {
      port: 8001,
      hot: true
   },
   module: {
      rules: [
        //  {
        //     test: /\.jsx?$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: "babel-loader",
        //         options: {
        //             presets: ['@babel/preset-env', '@babel/preset-react']
        //         }
        //     }
        //  },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
         },
         {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader']
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
      ]
   },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
   plugins:[
      new HtmlWebpackPlugin({
         template: path.join(__dirname, "src", 'index.html')
      })
   ]
}