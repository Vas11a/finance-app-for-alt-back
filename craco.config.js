const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@slices': path.resolve(__dirname, 'src/store/slices'),
      '@imgs': path.resolve(__dirname, 'src/assets/imgs'),
      '@service': path.resolve(__dirname, 'src/service'),
    },
  },
};