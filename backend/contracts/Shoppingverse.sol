// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Shoppingverse {
  //Globals
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
    string productId;
    string productName;
    string productDescription;
    string productImage;
    string productPriceInr;
    uint256 productPriceEth;
    address payable seller;
  }

  //Mappings
  mapping(address => User) public sellers;
  mapping(address => User) public buyers;
  mapping(address => string[]) public sellerProducts;
  mapping(address => Product[]) public buyerProducts;

  //Arrays
  Product[] public allProducts;

  //Modifiers
  modifier asSeller() {
    require(sellers[msg.sender].valid, 'You are not authorized as Seller');
    _;
  }

  modifier asBuyer() {
    require(buyers[msg.sender].valid, 'You are not authorized as Buyer');
    _;
  }

  //Functions
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
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string memory _productImage,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) external asSeller {
    Product memory product = Product(
      _productId,
      _productName,
      _productDescription,
      _productImage,
      _productPriceInr,
      _productPriceEth,
      payable(msg.sender)
    );
    allProducts.push(product);
    sellerProducts[msg.sender].push(_productId);
  }

  function addToCart(string memory _id) external asBuyer {
    uint256 productIndex = getProductIndex(_id);
    buyerProducts[msg.sender].push(allProducts[productIndex]);
  }

  function deleteProduct(string memory _productId) external asSeller {
    uint256 productIndex = getProductIndex(_productId);
    uint256 sellerProductIndex = getSellerProductIndex(_productId);
    delete allProducts[productIndex];
    delete sellerProducts[msg.sender][sellerProductIndex];
  }

  function updateProduct(
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) external asSeller {
    uint256 productIndex = getProductIndex(_productId);
    allProducts[productIndex].productName = _productName;
    allProducts[productIndex].productDescription = _productDescription;
    allProducts[productIndex].productPriceInr = _productPriceInr;
    allProducts[productIndex].productPriceEth = _productPriceEth;
  }

  function getSellerProductIndex(string memory _id)
    internal
    view
    returns (uint256)
  {
    for (uint256 i = 0; i < sellerProducts[msg.sender].length; i++) {
      if (
        keccak256(abi.encodePacked(sellerProducts[msg.sender][i])) ==
        keccak256(abi.encodePacked(_id))
      ) {
        return i;
      }
    }
    revert('Product not found');
  }

  function getProductIndex(string memory _id) internal view returns (uint256) {
    for (uint256 i = 0; i < allProducts.length; i++) {
      if (
        keccak256(abi.encodePacked(allProducts[i].productId)) ==
        keccak256(abi.encodePacked(_id))
      ) {
        return i;
      }
    }
    revert('Product not found');
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
  ) external asBuyer {
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
  ) external asSeller {
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
    Product[] memory products = new Product[](
      sellerProducts[msg.sender].length
    );
    for (uint256 i = 0; i < sellerProducts[msg.sender].length; i++) {
      uint256 index = getProductIndex(sellerProducts[msg.sender][i]);
      products[i] = allProducts[index];
    }
    return products;
  }

  function getBuyerProducts() external view returns (Product[] memory) {
    return buyerProducts[msg.sender];
  }
}
