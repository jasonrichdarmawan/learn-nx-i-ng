import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': 'checkout/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
