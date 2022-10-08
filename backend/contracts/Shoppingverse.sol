// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Shoppingverse {
  address payable private owner;

  constructor() {
    owner = payable(msg.sender);
  }

  struct Buyer {
    address walletAddress;
    string imgURL;
    string name;
    string email;
    string phone;
    string dob;
    string gender;
    string addr;
    string city;
    string pinCode;
    bool valid;
  }

  struct Seller {
    address walletAddress;
    string imgURL;
    string name;
    string email;
    string phone;
    string dob;
    string gender;
    string addr;
    string city;
    string pinCode;
    bool valid;
    bool isPaid;
  }

  mapping(address => Seller) public sellers;
  mapping(address => Buyer) public buyers;

  function addSeller(
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode
  ) public payable {
    require(!sellers[msg.sender].valid, 'You are already registered as Seller');
    require(
      msg.value == 0.009193 ether,
      'You dont have enough amount in your wallet'
    );
    owner.transfer(msg.value);
    sellers[msg.sender] = Seller(
      msg.sender,
      _imgURL,
      _name,
      _email,
      _phone,
      _dob,
      _gender,
      _addr,
      _city,
      _pinCode,
      true,
      true
    );
  }

  function addBuyer(
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode
  ) public {
    require(!buyers[msg.sender].valid, 'You are already registered as Buyer');
    buyers[msg.sender] = Buyer(
      msg.sender,
      _imgURL,
      _name,
      _email,
      _phone,
      _dob,
      _gender,
      _addr,
      _city,
      _pinCode,
      true
    );
  }

  function isSeller() public view returns (bool) {
    bool ans = sellers[msg.sender].valid;
    return ans;
  }

  function isBuyer() public view returns (bool) {
    bool ans = buyers[msg.sender].valid;
    return ans;
  }

  function getBuyerInfo() public view returns (Buyer memory) {
    return buyers[msg.sender];
  }

  function getSellerInfo() public view returns (Seller memory) {
    return sellers[msg.sender];
  }

  function updateBuyerInfo (
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode) public {
    buyers[msg.sender].imgURL = _imgURL;
    buyers[msg.sender].name = _name;
    buyers[msg.sender].email = _email;
    buyers[msg.sender].phone = _phone;
    buyers[msg.sender].dob = _dob;
    buyers[msg.sender].gender = _gender;
    buyers[msg.sender].addr = _addr;
    buyers[msg.sender].city = _city;
    buyers[msg.sender].pinCode = _pinCode;
  }

  function updateSellerInfo(
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode
  ) public {
    sellers[msg.sender].imgURL = _imgURL;
    sellers[msg.sender].name = _name;
    sellers[msg.sender].email = _email;
    sellers[msg.sender].phone = _phone;
    sellers[msg.sender].dob = _dob;
    sellers[msg.sender].gender = _gender;
    sellers[msg.sender].addr = _addr;
    sellers[msg.sender].city = _city;
    sellers[msg.sender].pinCode = _pinCode;
  }
}
