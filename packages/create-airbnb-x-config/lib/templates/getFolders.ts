import { configTypes, languages, legacyLanguages } from '@/constants';
import { subFolders, templateConstants } from '@/lib/templates/constants';
import getAllFolders from '@/lib/templates/getAllFolders';
import getDefaultSubFolders from '@/lib/templates/getDefaultSubFolders';

import type { Folders } from '@/lib/templates/getAllFolders';

type GetFolders = () => ReturnType<typeof getAllFolders>;

const getFolders: GetFolders = () => {
  const folders = {
    [configTypes.LEGACY]: {
      data: {
        [subFolders.BASE]: {
          data: getDefaultSubFolders({ strict: false }),
          meta: {
            language: legacyLanguages.BASE,
          },
        },
        [subFolders.REACT]: {
          data: getDefaultSubFolders({ strict: false }),
          meta: {
            language: legacyLanguages.REACT,
          },
        },
        [subFolders.REACT_HOOKS]: {
          data: getDefaultSubFolders({ strict: false }),
          meta: {
            language: legacyLanguages.REACT_HOOKS,
          },
        },
      },
      meta: {
        configType: configTypes.LEGACY,
      },
    },
    [languages.REACT]: {
      data: getDefaultSubFolders({ strict: true }),
      meta: {
        configType: configTypes.EXTENDED,
        language: languages.REACT,
      },
    },
    [languages.NEXT]: {
      data: getDefaultSubFolders({ strict: true }),
      meta: {
        configType: configTypes.EXTENDED,
        language: languages.NEXT,
      },
    },
    [languages.NODE]: {
      data: getDefaultSubFolders({ strict: true }),
      meta: {
        configType: configTypes.EXTENDED,
        language: languages.NODE,
      },
    },
  } satisfies Folders;

  return getAllFolders(folders, [templateConstants.FOLDER_NAME]);
};

export default getFolders;
