import type { HasDependency } from './types.js';

const condition = (hasDependency: HasDependency) => hasDependency('astro');

const taggedTemplateMatcher = /\w+(?:\.\w+)*`[\s\S]*?`/g;

const compiler = (text: string) => {
  if (!text.startsWith('---')) return '';
  const start = text.indexOf('---');
  const end = text.lastIndexOf('\n---\n');
  if (start === -1 || end === -1 || end <= start) return '';
  return text.substring(start + 3, end).replace(taggedTemplateMatcher, '""');
};

export default { condition, compiler };
