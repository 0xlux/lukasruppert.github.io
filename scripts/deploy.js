// Import the Hardhat runtime environment explicitly
const hardhat = require("hardhat");

async function main() {
  // Get the contract factory
  const MyNFT = await hardhat.ethers.getContractFactory("MyNFT");
  // Deploy the contract
  const nft = await MyNFT.deploy();
  
  // Wait for the contract to be deployed
  await nft.deployTransaction.wait();

  console.log("MyNFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
