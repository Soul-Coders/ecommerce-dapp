const hre = require('hardhat');

async function main() {
  const Shoppingverse = await hre.ethers.getContractFactory('Shoppingverse');
  const NftWarranty = await hre.ethers.getContractFactory('NftWarranty');
  const shoppingverse = await Shoppingverse.deploy();
  const nftwarranty = await NftWarranty.deploy('NFT Warranty', 'NFTWar');

  await shoppingverse.deployed();
  await nftwarranty.deployed();

  console.log(`Shoppingverse deployed to ${shoppingverse.address}`);
  console.log(`NftWarranty deployed to ${nftwarranty.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
