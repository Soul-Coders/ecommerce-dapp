const hre = require('hardhat');

async function main() {
  const Shoppingverse = await hre.ethers.getContractFactory('Shoppingverse');
  const shoppingverse = await Shoppingverse.deploy();

  await shoppingverse.deployed();

  console.log(`Shoppingverse deployed to ${shoppingverse.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
