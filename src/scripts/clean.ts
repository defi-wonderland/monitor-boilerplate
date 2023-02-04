import { TenderlyAPI } from '@defi-wonderland/tenderly-monitor-utils';
import { config } from '../config';
import { EnvKey } from '../constants';
import { getEnvVariable } from '../utils/env';

(async () => {
  if (getEnvVariable(EnvKey.PreCleanActive) !== 'true') {
    console.info(`Skipped unused actions removal`);
    return;
  }

  const api = new TenderlyAPI(getEnvVariable(EnvKey.AccessToken), getEnvVariable(EnvKey.TenderlyUsername), getEnvVariable(EnvKey.TenderlySlug));

  console.log('Deleting unused actions...');

  // get all actions declared in tenderly project
  const actions = await api.getProjectActions();

  // fitler actions that are not declared in the config
  const actionsToDelete = actions.filter((action) => !Object.keys(config).includes(action.name));

  // remove the filtered actions
  await api.deleteProjectActions(actionsToDelete);

  console.log('Unused actions removal completed.');
})();
