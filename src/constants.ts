import { Network } from '@defi-wonderland/tenderly-monitor-utils';

export const contracts = {
  basicContract: {
    [Network.Goerli]: '0x1A0e4eD48eA4aC58C8A539991bfb314E4115A8dA',
  },
  basicFactory: {
    [Network.Goerli]: '0x3a9e5fe2e872B9d57E4e2C9bE10a8bF2c97156Bf',
  },
};

export enum DiscordNotifier {
  'Here' = '@here',
}

export enum ContractTag {
  GeneralTag = 'GENERAL_TAG',
}

export enum TenderlyAlertId {
  GeneralTenderlyAlert = '3b30baa1-844d-45ae-a648-894e9d217774',
}

export enum TenderlyCustomSecret {
  DiscordWebhookGeneral = 'DISCORD_WEBHOOK_GENERAL',
}

export enum EnvKey {
  AccessToken = 'TENDERLY_ACCESS_TOKEN',
  TenderlyUsername = 'TENDERLY_USERNAME',
  TenderlySlug = 'TENDERLY_SLUG',
  PreCleanActive = 'TENDERLY_PRE_CLEAN',
}
