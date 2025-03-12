const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const EXISTING_ADDRESS = process.env.LUNARIS_ADDRESS; // From .env

  // Get the contract factory
  const Lunaris = await hre.ethers.getContractFactory("Lunaris");

  // Deploy the contract
  let lunaris
  if (EXISTING_ADDRESS) {
    // Use existing contract if address is provided
    lunaris = await Lunaris.attach(EXISTING_ADDRESS);
    console.log("Using existing Lunaris at:", lunaris.target);
  } else {
    await Lunaris.deploy();
    // Wait for the deployment to be mined
    await lunaris.waitForDeployment();

    // Wait for deployment to be mined (already handled by deploy())
    console.log("Lunaris deployed to:", lunaris.target);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
