# Wonderland Monitor Boilerplate

<br />

The Wonderland Monitor Boilerplate is a highly scalable foundation that uses the Wonderland Tenderly Monitor Utils (https://github.com/defi-wonderland/tenderly-monitor-utils) to track blockchain projects with Tenderly.

<br />

## Features

<dl>
  <dt>Sample contracts abis</dt>
  <dd>Basic contracts abis to showcase the track of transactions, alerts, contract creations and test discord notifications using the Wonderland Tenderly Monitor lib.</dd>

  <dt>Package JSON setup</dt>
  <dd>Includes the configuration and all the dependencies including the tenderly monitor utils and the scripts to run the project.</dd>

  <dt>Basic config setup</dt>
  <dd>Basic typescript file setup for the tenderly automatic configuration.</dd>

  <dt>Build script</dt>
  <dd>Script used to validate and generate the tenderly YAML file and event handlers for the Web3 Actions and alerts</dd>

  <dt>Clean script</dt>
  <dd>Used to automatically remove the actions that are not present in the source code.</dd>

  <dt>Constant sample file</dt>
  <dd>Example of constants that can be used for the project configuration.</dd>

  <dt>Linter</dt>
  <dd>Simple and fast typescript linting</a>.</dd>

  <dt>Github workflows CI</dt>
  <dd>Automatic tenderly deploy and lint workflow.</dd>
</dl>

## Setup

1. Copy the `.env.example` file to `.env` and fill in the variables
2. Install the dependencies by running: `yarn`

## Build

You can run it via:

```bash
yarn build
```

## Deploy

You can deploy your project to Tenderly running:

```bash
yarn tenderly:deploy
```

Maintained with love by [DeFi Wonderland](https://defi.sucks). Made possible by viewers like you.
