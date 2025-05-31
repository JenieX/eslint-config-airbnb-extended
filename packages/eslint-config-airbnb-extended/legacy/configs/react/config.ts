import legacyReactBaseRules from '@/legacy/rules/react/react';
import legacyReactHooksRules from '@/legacy/rules/react/reactHooks';
import legacyReactJsxA11yRules from '@/legacy/rules/react/reactJsxA11y';

import type { Linter } from 'eslint';

const legacyReactConfig = {
  base: legacyReactBaseRules,
  jsxA11y: legacyReactJsxA11yRules,
  hooks: legacyReactHooksRules,
} satisfies Record<string, Linter.Config>;

export default legacyReactConfig;
