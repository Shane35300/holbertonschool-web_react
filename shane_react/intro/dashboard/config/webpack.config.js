const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Point d'entrée de l'application
  output: {
    path: path.resolve(__dirname, '../dist'),  // Répertoire de sortie
    filename: 'bundle.js',  // Nom du bundle généré
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, '../dist'),  // Répertoire statique pour le dev server
    hot: true,  // Activer le rechargement à chaud
    port: 3000,  // Port du serveur de développement
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Transpiler les fichiers JS et JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Charger les fichiers CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,  // Charger et optimiser les images
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,  // Bypass pendant le développement
              disable: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Extensions à traiter
  },
  devtool: 'inline-source-map',  // Source maps pour faciliter le débogage
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template HTML
    }),
  ],
};
