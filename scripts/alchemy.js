import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "wqzvQ13emxJ7AnWL23I00VjeIQlG8uaH",
    network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
