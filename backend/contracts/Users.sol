// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { SharedStructs } from './SharedStructs.sol';
import { Data } from './Data.sol';

contract Users {
  //Functions
  function addUser(
    bool sellerAccount,
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode
  ) external payable  {
    if (sellerAccount) {
      require(!Data.user().isSeller, 'Existing Seller');
      require(msg.value == 0.009193 ether, 'Insufficient wallet funds!');
      Data.owner().transfer(msg.value);
    } else {
      require(!Data.user().isBuyer, 'Existing Buyer');
    }
    Data.addUser(sellerAccount, _imgURL,  _name, _email,  _phone, _dob, _gender,  _addr, _city, _pinCode);
  }

  function getUserInfo() external view returns (SharedStructs.User memory) {
    return Data.user();
  }

  function updateUserInfo(
    string memory _imgURL,
    string memory _name,
    string memory _email,
    string memory _phone,
    string memory _dob,
    string memory _gender,
    string memory _addr,
    string memory _city,
    string memory _pinCode
  ) external {
    Data.updateUserInfo(_imgURL,  _name, _email,  _phone, _dob, _gender,  _addr, _city, _pinCode);
  }
}
