const withSass = require('@zeit/next-sass');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
    },
    webpack(config, { dev }) {
        if (dev) {
            config.plugins.push(new StyleLintPlugin());
        }
        return config;
    },
    exportPathMap() {
        return {
            '/': { page: '/' },
        };
    },
    assetPrefix: !debug ? '/nextapp/' : '',
});
