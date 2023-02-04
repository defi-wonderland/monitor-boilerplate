import fse from 'fs-extra';
import { config } from '../config';
import { validateConfig, generateEventHandlerTs, generateTenderlyYaml, TenderlyAPI } from '@defi-wonderland/tenderly-monitor-utils';
import { getEnvVariable } from '../utils/env';
import { contracts, EnvKey } from '../constants';
import { TenderlyContractAddition } from '@defi-wonderland/tenderly-monitor-utils/lib/types/tenderly';

(async () => {
  console.info(`Validating config`);
  validateConfig(config);

  const projectName = `${getEnvVariable(EnvKey.TenderlyUsername)}/${getEnvVariable(EnvKey.TenderlySlug)}`;

  const api = new TenderlyAPI(getEnvVariable(EnvKey.AccessToken), getEnvVariable(EnvKey.TenderlyUsername), getEnvVariable(EnvKey.TenderlySlug));

  // add configured contracts to tenderly
  console.info(`Adding ${Object.keys(contracts).length} contract(s) to Tenderly`);

  // create list of contracts that need to be added to Tenderly
  let additions: TenderlyContractAddition[] = [];
  Object.entries(contracts).forEach(([display_name, addresses]) => {
    Object.entries(addresses).forEach(([network_id, address]) => {
      additions.push({ address, display_name, network_id });
    });
  });

  await api.addContracts(additions);

  // generate yaml file
  console.info(`Generating tenderly.yaml file`);
  const tenderlyYaml = generateTenderlyYaml(config, 'event-handler', projectName);
  await fse.outputFile('tenderly.yaml', tenderlyYaml);

  // generate event-handler typescript file
  console.info(`Generating event files`);
  const eventHandlerTs = generateEventHandlerTs(config);
  await fse.outputFile('event-handler.ts', eventHandlerTs);
})();
