const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Shoppingverse', function () {
  it('returns the address of all users', async function () {
    const [buyer] = await ethers.getSigners();
    const ourContract = await ethers.getContractFactory('Shoppingverse');
    const contract = await ourContract.deploy();
    await contract.deployed();

    const name = 'test',
      email = 'test',
      phone = '1010101010',
      age = '20',
      gender = 'male',
      street = 'test',
      city = 'test',
      pin = 'test';
    const newBuyer = await contract.addBuyer(
      name,
      email,
      phone,
      age,
      gender,
      street,
      city,
      pin
    );
    await newBuyer.wait();
    let users = await contract.getAllUsers();
    console.log(users[0]);

    expect(users[0]).to.equal(buyer.address);
  });
});
