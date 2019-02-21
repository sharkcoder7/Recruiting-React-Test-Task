exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: {
      presets: [
        'stage-0', 'stage-2', 'es2015', 'react'
      ]
    }
  }
};
