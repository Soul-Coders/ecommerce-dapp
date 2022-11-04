// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library SharedStructs {
  struct User {
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
    bool isSeller;
    bool isBuyer;
  }

  struct Product {
    string productId;
    string productName;
    string productDescription;
    string [] productGallery;
    string productPriceInr;
    uint256 productPriceEth;
    address payable seller;
  }
  
  struct Order {
    string id;
    string date;
    User buyer;
    Product product;
    int qty;
    uint256 shippingPriceEth;
    string status;
  }
}