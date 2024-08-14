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
        type: 'asset/resource', // Charger les fichiers d'images
        generator: {
          filename: 'images/[name][ext][query]', // Nom du fichier de sortie
        },
      },
    ],
  },
  performance: {
    maxAssetSize: 2000000, // Limite en octets (2 Mo ici)
    maxEntrypointSize: 2000000, // Limite en octets (2 Mo ici)
    hints: 'warning', // Afficher un avertissement pour les fichiers qui dépassent la taille définie
  },
};
