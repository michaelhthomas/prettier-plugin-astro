import type { Parser, Printer, SupportLanguage } from 'prettier';
import { options } from './options';
export declare const languages: Partial<SupportLanguage>[];
export declare const parsers: Record<string, Parser>;
export declare const printers: Record<string, Printer>;
declare const defaultOptions: {
    tabWidth: number;
};
export { defaultOptions, options };
