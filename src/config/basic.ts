import BasicContractABI from '../abi/BasicContract.json';
import BasicFactoryABI from '../abi/BasicFactory.json';
import BasicFactoryChildABI from '../abi/BasicFactoryChild.json';
import { contracts, ContractTag, DiscordNotifier, TenderlyAlertId, TenderlyCustomSecret } from '../constants';
import { Severity, Trigger, TransactionTriggerFilter, Network, Task, HandlerConfig } from '@defi-wonderland/tenderly-monitor-utils';

export const basicConfig: HandlerConfig = {
  BasicContract: {
    abi: BasicContractABI,
    trigger: {
      type: Trigger.Transaction,
      filters: [
        {
          type: TransactionTriggerFilter.Event,
          network: Network.Goerli,
          contract: contracts.basicContract[Network.Goerli],
          name: 'Call2',
        },
      ],
    },
    tasks: [
      {
        type: Task.DiscordNotification,
        severity: Severity.Critical,
        channelWebhookSecret: TenderlyCustomSecret.DiscordWebhookGeneral,
        notifiers: [DiscordNotifier['Here']],
      },
    ],
  },
  BasicFactory: {
    abi: BasicFactoryABI,
    trigger: {
      type: Trigger.Transaction,
      filters: [
        {
          type: TransactionTriggerFilter.Event,
          network: Network.Goerli,
          contract: contracts.basicFactory[Network.Goerli],
          name: 'BasicChildCreated',
        },
      ],
    },
    tasks: [
      {
        type: Task.TagChildContract,
        tag: ContractTag.GeneralTag,
        childAddressEventIndex: 0,
      },
      {
        type: Task.DiscordNotification,
        severity: Severity.Critical,
        channelWebhookSecret: TenderlyCustomSecret.DiscordWebhookGeneral,
        notifiers: [DiscordNotifier['Here']],
      },
    ],
  },
  BasicFactoryChild: {
    abi: BasicFactoryChildABI,
    trigger: {
      type: Trigger.Alert,
      id: TenderlyAlertId.GeneralTenderlyAlert,
      filters: [
        {
          type: TransactionTriggerFilter.Event,
          name: 'ChildEvent2',
        },
      ],
    },
    tasks: [
      {
        type: Task.DiscordNotification,
        severity: Severity.Info,
        channelWebhookSecret: TenderlyCustomSecret.DiscordWebhookGeneral,
        notifiers: [DiscordNotifier['Here']],
      },
    ],
  },
};
