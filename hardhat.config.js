require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      accounts: ['dcea0bc45d5adf30f5595fb2cc19e2a180ed3ff68bf38d9071218defbf77f7a1'],
      url: "https://polygon-rpc.com/",
      chainId: 137,
    },
    testnet: {
      accounts: ['dcea0bc45d5adf30f5595fb2cc19e2a180ed3ff68bf38d9071218defbf77f7a1'],
      url: "https://rpc-mumbai.matic.today",
      chainId: 80001,
    },
  },
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
