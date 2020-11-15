const custom = require( "../webpack.config" )( null, "development" );

module.exports = {
    stories: [ "../src/admin/**/*.stories.js" ],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
    ],
    webpackFinal: config => {
        return {
            ...config,
            module: {
                ...config.module,
                rules: custom.module.rules
            },
            resolve: custom.resolve
        };
    }
}