const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Point d'entrée du fichier JavaScript
  output: {
    filename: 'bundle.js', // Nom du fichier JavaScript généré
    path: path.resolve(__dirname, 'public'), // Dossier de sortie
  },
  mode: 'production', // Mode de compilation
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Charger les fichiers CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name][ext][query]', // Nom du fichier de sortie
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65, // Compression JPEG
              },
              optipng: {
                enabled: true, // Compression PNG
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false, // Compression GIF
              },
              webp: {
                quality: 75, // Compression WebP
              },
            },
          },
        ],
        type: 'asset/resource',
      },
    ],
  },
  performance: {
    maxAssetSize: 20000000, // Limite en octets (2 Mo ici)
    maxEntrypointSize: 20000000, // Limite en octets (2 Mo ici)
    hints: 'warning', // Afficher un avertissement pour les fichiers qui dépassent la taille définie
  },
};
