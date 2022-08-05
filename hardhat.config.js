require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      accounts: [process.env.privateKey],
      url: "https://polygon-rpc.com/",
      chainId: 137,
    },
    testnet: {
      accounts: [process.env.privateKey],
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
