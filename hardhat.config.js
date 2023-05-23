require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
