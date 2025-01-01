require("@nomicfoundation/hardhat-toolbox");
require("hardhat-preprocessor");
require("dotenv").config();
const fs = require('fs')


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
      compilers: [
        { 
            version: '0.8.26',
            settings: {
              // viaIR: true,
              optimizer: {
                enabled: true,
                runs: 10000,
              },
            }
          }
      ]
    },
  networks: {
    hardhat: {},
    // ethereumSepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${INFURA_API_KEY_ETHEREUM_SEPOLIA}`,
    //   accounts: [PRIVATE_KEY],
    // },
  },
}
