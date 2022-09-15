// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Shoppingverse {
  address payable private owner;

  constructor() {
    owner = payable(msg.sender);
  }

  address[] public allUsers;

  struct User {
    address walletAddress;
    string name;
    string email;
    string phone;
    string age;
    string gender;
    string streetAddress;
    string city;
    string pinCode;
    bool valid;
  }

  mapping(address => User) public sellers;
  mapping(address => User) public buyers;

  function addSeller(
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _age,
    string memory _gender,
    string memory _streetAddress,
    string memory _city,
    string memory _pinCode
  ) public {
    require(!buyers[msg.sender].valid);
    sellers[msg.sender] = User(
      msg.sender,
      _name,
      _email,
      _phone,
      _age,
      _gender,
      _streetAddress,
      _city,
      _pinCode,
      true
    );
    allUsers.push(msg.sender);
  }

  function addBuyer(
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _age,
    string memory _gender,
    string memory _streetAddress,
    string memory _city,
    string memory _pinCode
  ) public {
    require(!buyers[msg.sender].valid);
    buyers[msg.sender] = User(
      msg.sender,
      _name,
      _email,
      _phone,
      _age,
      _gender,
      _streetAddress,
      _city,
      _pinCode,
      true
    );
    allUsers.push(msg.sender);
  }

  function getAllUsers() public view returns(address[] memory) {
    return allUsers;
  }
}
