const path = require('path');

//from https://github.com/spkellydev/nextjs-scss-ssr-react-tutorial/blob/master/next.config.js
module.exports = {
  images: {
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  env: {
    // strapi_base: process.env.STRAPI_BASE_URL,
  },
};