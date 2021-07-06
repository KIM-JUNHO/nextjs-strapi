const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: `/strapi/:path*`,
        destination: `http://localhost:1337/:path*`,
      },
    ];
  },
};
