import type { Doc, Options } from 'prettier';
import _doc from 'prettier/doc';
import { type AstPath } from './utils';
type TextToDoc = (text: string, options: Options) => Promise<Doc>;
export declare const embed: (path: AstPath, options: Options) => (textToDoc: TextToDoc, print: (selector?: string | number | Array<string | number> | AstPath) => Doc) => Promise<_doc.builders.Doc | undefined>;
export {};
