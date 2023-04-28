require('@nomicfoundation/hardhat-toolbox');
require('hardhat-contract-sizer');
require('dotenv').config({ path: __dirname + '/.env' });

task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOERLI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // goerli: {
    //   url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [`${GOERLI_PRIVATE_KEY}`],
    // },
  },
  solidity: '0.8.17',
};
