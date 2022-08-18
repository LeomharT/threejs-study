const { override, overrideDevServer, addBabelPreset, addDecoratorsLegacy } = require('customize-cra');


module.exports = {
    webpack: override(
        (config) =>
        {
            return config;
        },
        addBabelPreset([
            '@babel/preset-typescript',
            /** Allow declare keyword */
            { allowDeclareFields: true }
        ]),
        addDecoratorsLegacy(),
    ),
    devServer: overrideDevServer(config =>
    {
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = { disableDotRule: true };

        return config;
    })
};