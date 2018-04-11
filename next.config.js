const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    exportPathMap() {
        return {
            '/': { page: '/' },
        };
    },
    assetPrefix: !debug ? '/nextapp/' : '',
};
