/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

const PRIVATE_KEY       = process.env.PRIVATE_KEY ?? "";
const SEPOLIA_API_KEY   = process.env.SEPOLIA_API_KEY ?? "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? "";

module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url: SEPOLIA_API_KEY,
      accounts : [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY}
  },
  sourcify: {
    enabled : true
  }
};
