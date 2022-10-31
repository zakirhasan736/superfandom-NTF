import { AppConfig, UserSession } from '@stacks/connect';
import { StacksMainnet, StacksTestnet } from '@stacks/network';
import { STX_NETWORK } from '../constants';

const config = {
    appDetails: {
        name: 'Superfandom',
        icon: 'https://superfandom.io/assets/logos/logo.png',
    },
    appConfig: new AppConfig(['store_write', 'publish_data']),
};

const userSession = new UserSession({ appConfig: config.appConfig });

const getSTXAccount = () =>
    STX_NETWORK === 'testnet'
        ? userSession.loadUserData().profile.stxAddress.testnet
        : userSession.loadUserData().profile.stxAddress.mainnet;

const getSTXNetwork = () =>
    STX_NETWORK === 'testnet' ? new StacksTestnet() : new StacksMainnet();

export { config, userSession, getSTXAccount, getSTXNetwork };
