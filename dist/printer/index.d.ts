import { type Doc } from 'prettier';
import { type AstPath, type ParserOptions, type printFn } from './utils';
export declare function print(path: AstPath, opts: ParserOptions, print: printFn): Doc;
