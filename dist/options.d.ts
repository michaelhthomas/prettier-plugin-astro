import type { SupportOption } from 'prettier';
interface PluginOptions {
    astroAllowShorthand: boolean;
    astroSkipFrontmatter: boolean;
}
declare module 'prettier' {
    interface RequiredOptions extends PluginOptions {
    }
}
export declare const options: Record<keyof PluginOptions, SupportOption>;
export {};
