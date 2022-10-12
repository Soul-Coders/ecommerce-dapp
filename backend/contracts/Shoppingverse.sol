// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Shoppingverse {
  address payable private owner;

  constructor() {
    owner = payable(msg.sender);
  }

  //Structs
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
    bool valid;
  }

  struct Product {
    string productName;
    string productDescription;
    string productImage;
    string productPriceInr;
    uint256 productPriceEth;
    address payable seller;
    string productStatus;
  }

  //Mappings
  mapping(address => User) public sellers;
  mapping(address => User) public buyers;
  mapping(address => Product[]) public sellerProducts;

  //Arrays
  Product[] public allProducts;

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
  ) external payable {
    require(!sellers[msg.sender].valid, 'You are already registered as Seller');
    require(
      msg.value == 0.009193 ether,
      'You dont have enough amount in your wallet'
    );
    owner.transfer(msg.value);
    sellers[msg.sender] = User(
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
  ) external {
    require(!buyers[msg.sender].valid, 'You are already registered as Buyer');
    buyers[msg.sender] = User(
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

  function addProduct(
    string memory _productName,
    string memory _productDescription,
    string memory _productImage,
    string memory _productPriceInr,
    uint256 _productPriceEth,
    string memory _productStatus
  ) external {
    require(sellers[msg.sender].valid, 'You are not authorized to add product');
    Product memory product = Product(
      _productName,
      _productDescription,
      _productImage,
      _productPriceInr,
      _productPriceEth,
      payable(msg.sender),
      _productStatus
    );
    allProducts.push(product);
    sellerProducts[msg.sender].push(product);
  }

  function isSeller() external view returns (bool) {
    bool ans = sellers[msg.sender].valid;
    return ans;
  }

  function isBuyer() external view returns (bool) {
    bool ans = buyers[msg.sender].valid;
    return ans;
  }

  function getBuyerInfo() external view returns (User memory) {
    return buyers[msg.sender];
  }

  function getSellerInfo() external view returns (User memory) {
    return sellers[msg.sender];
  }

  function updateBuyerInfo(
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
  ) external {
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

  function getAllProducts() external view returns (Product[] memory) {
    return allProducts;
  }

  function getSellerProducts() external view returns (Product[] memory) {
    return sellerProducts[msg.sender];
  }
}
