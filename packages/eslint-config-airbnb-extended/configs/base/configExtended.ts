import baseConfig from '@/configs/base/config';
import importsStrictRules from '@/rules/importsStrict';

import type { Linter } from 'eslint';

const baseConfigExtended = {
  ...baseConfig,
  importsStrict: importsStrictRules,
} satisfies Record<string, Linter.Config>;

export default baseConfigExtended;
