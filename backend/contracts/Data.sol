// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {SharedStructs} from './SharedStructs.sol';

// This library has the state variables 'contractAddress' and 'name'
library Data {
  // defining state variables
  struct DiamondStorage {
    address contractAddress;
    // Users
    mapping(address => SharedStructs.User) users;
    address payable owner;
    // Products
    SharedStructs.Product[] allProducts;
    mapping(address => string[]) sellerProducts;
    // Orders
    SharedStructs.Order[] allOrders;
    mapping(address => string[]) sellerOrders;
  }

  // return a struct storage pointer for accessing the state variables
  function diamondStorage() internal pure returns (DiamondStorage storage ds) {
    bytes32 position = keccak256('diamond.standard.diamond.storage');
    assembly {
      ds.slot := position
    }
  }

  // set state variables
  function setStateVariables(
    address _contractAddress,
    address _owner
  ) internal {
    DiamondStorage storage ds = diamondStorage();
    ds.contractAddress = _contractAddress;
    ds.owner = payable(_owner);
  }

  /*
   *   %%%%%%%%%%%%%%%%%%%%%%%%%% Fetch %%%%%%%%%%%%%%%%%%%%%%%%%%
   */

  function contractAddress() internal view returns (address) {
    return diamondStorage().contractAddress;
  }

  function user() internal view returns (SharedStructs.User memory) {
    return diamondStorage().users[msg.sender];
  }

  function owner() internal view returns (address payable) {
    return diamondStorage().owner;
  }

  function allProducts()
    internal
    view
    returns (SharedStructs.Product[] memory)
  {
    return diamondStorage().allProducts;
  }

  function sellerProducts() internal view returns (string[] memory) {
    return diamondStorage().sellerProducts[msg.sender];
  }

  function allOrders() internal view returns (SharedStructs.Order[] memory) {
    return diamondStorage().allOrders;
  }

  function sellerOrders() internal view returns (string[] memory) {
    return diamondStorage().sellerOrders[msg.sender];
  }

  /*
   *   %%%%%%%%%%%%%%%%%%%%%%%%%% Execute %%%%%%%%%%%%%%%%%%%%%%%%%%
   */

  ////////////////////////// User //////////////////////////

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
  ) internal {
    diamondStorage().users[msg.sender] = SharedStructs.User(
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
      sellerAccount || Data.user().isSeller,
      !sellerAccount || Data.user().isBuyer
    );
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
  ) internal {
    DiamondStorage storage ds = diamondStorage();
    ds.users[msg.sender].imgURL = _imgURL;
    ds.users[msg.sender].name = _name;
    ds.users[msg.sender].email = _email;
    ds.users[msg.sender].phone = _phone;
    ds.users[msg.sender].dob = _dob;
    ds.users[msg.sender].gender = _gender;
    ds.users[msg.sender].addr = _addr;
    ds.users[msg.sender].city = _city;
    ds.users[msg.sender].pinCode = _pinCode;
  }

  ////////////////////////// Products //////////////////////////
  function addProduct(SharedStructs.Product memory product) internal {
    DiamondStorage storage ds = diamondStorage();
    ds.allProducts.push(product);
    ds.sellerProducts[msg.sender].push(product.productId);
  }

  //************** !!!! Repeated Code
  function getSellerProductIndex(
    string memory _id
  ) internal view returns (uint256) {
    for (uint256 i = 0; i < Data.sellerProducts().length; i++) {
      if (
        keccak256(abi.encodePacked(Data.sellerProducts()[i])) ==
        keccak256(abi.encodePacked(_id))
      ) {
        return i;
      }
    }
    revert('Product not found');
  }

  //************** !!!! Repeated Code
  function getProductIndex(string memory _id) internal view returns (uint256) {
    for (uint256 i = 0; i < Data.allProducts().length; i++) {
      if (
        keccak256(abi.encodePacked(Data.allProducts()[i].productId)) ==
        keccak256(abi.encodePacked(_id))
      ) {
        return i;
      }
    }
    revert('Product not found');
  }

  function deleteProduct(string memory _productId) internal {
    DiamondStorage storage ds = diamondStorage();
    uint256 productIndex = getProductIndex(_productId);
    uint256 sellerProductIndex = getSellerProductIndex(_productId);
    delete ds.allProducts[productIndex];
    delete ds.sellerProducts[msg.sender][sellerProductIndex];
  }

  function updateProduct(
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) internal {
    DiamondStorage storage ds = diamondStorage();
    uint256 productIndex = getProductIndex(_productId);
    ds.allProducts[productIndex].productName = _productName;
    ds.allProducts[productIndex].productDescription = _productDescription;
    ds.allProducts[productIndex].productPriceInr = _productPriceInr;
    ds.allProducts[productIndex].productPriceEth = _productPriceEth;
  }

  function getProduct(
    string memory _id
  ) internal view returns (SharedStructs.Product memory) {
    return Data.allProducts()[getProductIndex(_id)];
  }

  function getSellerProducts()
    internal
    view
    returns (SharedStructs.Product[] memory)
  {
    SharedStructs.Product[] memory products = new SharedStructs.Product[](
      Data.sellerProducts().length
    );
    for (uint256 i = 0; i < Data.sellerProducts().length; i++) {
      uint256 index = getProductIndex(Data.sellerProducts()[i]);
      products[i] = Data.allProducts()[index];
    }
    return products;
  }

  ////////////////////////// Orders //////////////////////////
  function getOrderIndex(string memory _id) internal view returns (uint256) {
    for (uint256 i = 0; i < Data.allOrders().length; i++) {
      if (
        keccak256(abi.encodePacked(Data.allOrders()[i].id)) ==
        keccak256(abi.encodePacked(_id))
      ) {
        return i;
      }
    }
    revert('Product not found');
  }

  function placeOrder(
    string memory _id,
    string memory _date,
    SharedStructs.User memory _buyer,
    SharedStructs.Product memory _product,
    int _qty,
    uint256 _shippingPriceInr,
    string memory _status
  ) internal {
    DiamondStorage storage ds = diamondStorage();
    ds.allOrders.push(
      SharedStructs.Order(
        _id,
        _date,
        _buyer,
        _product,
        _qty,
        _shippingPriceInr,
        _status
      )
    );
    ds.sellerOrders[_product.seller].push(_id);
  }

  function getSellerOrders()
    internal
    view
    returns (SharedStructs.Order[] memory)
  {
    SharedStructs.Order[] memory orders = new SharedStructs.Order[](
      Data.sellerOrders().length
    );
    for (uint256 i = 0; i < Data.sellerOrders().length; i++) {
      uint256 index = getOrderIndex(Data.sellerOrders()[i]);
      orders[i] = Data.allOrders()[index];
    }
    return orders;
  }

  function getCart(
    string[] memory _productId
  ) internal view returns (SharedStructs.Product[] memory) {
    DiamondStorage storage ds = diamondStorage();
    SharedStructs.Product[] memory products = new SharedStructs.Product[](
      _productId.length
    );
    for (uint256 i = 0; i < _productId.length; i++) {
      uint256 productIndex = getProductIndex(_productId[i]);
      products[i] = ds.allProducts[productIndex];
    }
    return products;
  }

  function getOrder(
    string memory _id
  ) internal view returns (SharedStructs.Order memory) {
    return Data.allOrders()[getOrderIndex(_id)];
  }
}
