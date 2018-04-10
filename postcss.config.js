const postcssEasyImport = require('postcss-easy-import');
const autoPrefixer = require('autoprefixer');
const postcssUtilities = require('postcss-utilities');
const postcssShort = require('postcss-short');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
    plugins: [
        postcssEasyImport({ prefix: '_' }),
        autoPrefixer({
            browsers: ['last 2 versions', '> 2%'],
        }),
        postcssUtilities(),
        postcssShort(),
        postcssFlexbugsFixes(),
    ],
};
