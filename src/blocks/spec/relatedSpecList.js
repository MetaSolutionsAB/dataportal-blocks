import listStandard from '../common/layout/listStandard.js';

// The limit functions only as a safety mechanism
export default {
  extends: listStandard,
  namedclick: 'spec',
  vertical: true,
  limit: '25',
  rowClass: 'esbSpecLink',
};
