import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "WnTTPERZi_8C6PEItB-Y1-OkmP8IFHF0",
    network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
