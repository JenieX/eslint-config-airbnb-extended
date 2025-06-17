import getImportSettings from '@/helpers/getImportSettings';
import getStylisticLegacyConfig from '@/helpers/getStylisticLegacyConfig';
import { allFiles, jsFileWithoutReact } from '@/utils';

import type { Linter } from 'eslint';

const baseRecommendedExtensionsConfig = [
  {
    name: 'airbnb/config/base-configurations',
    files: allFiles,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    settings: {
      'import-x/core-modules': [],
      'import-x/ignore': ['node_modules', String.raw`\.(coffee|scss|css|less|hbs|svg|json)$`],
    },
  },
  {
    name: 'airbnb/config/base-settings-extensions-configurations',
    files: jsFileWithoutReact,
    settings: getImportSettings({ javascript: true, typescript: false, jsx: false }),
  },
  {
    name: 'airbnb/config/base-disable-legacy-stylistic-js-config',
    files: allFiles,
    ...getStylisticLegacyConfig('javascript'),
  },
] satisfies Linter.Config[];

export default baseRecommendedExtensionsConfig;
