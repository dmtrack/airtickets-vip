import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;
    const cssLoader = {
        test: /\.sass|less|css$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes('.module')),
                        localIdentName: isDev
                            ? '[path][name]__[local]-[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader];
};
