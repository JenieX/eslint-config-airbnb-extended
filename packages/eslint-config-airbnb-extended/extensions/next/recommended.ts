import { allFiles } from '@/utils';

import type { Linter } from 'eslint';

const nextRecommendedExtensionsConfig = [
  {
    name: 'airbnb/config/next-import-x',
    files: ['**/app/**/route.ts', '**/middleware.ts'],
    rules: {
      'import-x/prefer-default-export': 'off',
    },
  },
  {
    name: 'airbnb/config/next-react-jsx-runtime',
    files: allFiles,
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
] satisfies Linter.Config[];

export default nextRecommendedExtensionsConfig;
