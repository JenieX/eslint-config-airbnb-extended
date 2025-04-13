import importXPluginConfig from '@/plugins/importXPlugin';
import nextPlugin from '@/plugins/nextPlugin';
import nodePlugin from '@/plugins/nodePlugin';
import reactA11yPlugin from '@/plugins/reactA11yPlugin';
import reactHooksPlugin from '@/plugins/reactHooksPlugin';
import reactPlugin from '@/plugins/reactPlugin';
import typescriptEslintPlugin from '@/plugins/typescriptEslintPlugin';

import type { Linter } from 'eslint';

/**
 * as is given due to less size of index.d.ts
 */
const plugins = {
  importX: importXPluginConfig as Linter.Config,
  node: nodePlugin as Linter.Config,
  react: reactPlugin as Linter.Config,
  reactA11y: reactA11yPlugin as Linter.Config,
  reactHooks: reactHooksPlugin as Linter.Config,
  next: nextPlugin as Linter.Config,
  typescriptEslint: typescriptEslintPlugin as Linter.Config,
};

export default plugins;
