require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Make sure to require dotenv

module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_URL, // Use the environment variable directly
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`] // Inject the private key with the `0x` prefix
    }
  }
};
