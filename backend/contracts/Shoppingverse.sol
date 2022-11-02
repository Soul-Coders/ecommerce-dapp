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

  //Mappings
  mapping(address => User) public users;
  mapping(address => string[]) public sellerProducts;

  //Arrays
  Product[] public allProducts;

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
  ) external payable {
    if (sellerAccount) {
      require(!users[msg.sender].isSeller, 'Existing Seller');
      require(msg.value == 0.009193 ether, 'Insufficient wallet funds!');
      owner.transfer(msg.value);
    } else {
      require(!users[msg.sender].isBuyer, 'Existing Buyer');
    }
    users[msg.sender] = User(
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
      sellerAccount || users[msg.sender].isSeller,
      !sellerAccount || users[msg.sender].isBuyer
    );
  }

  function addProduct(
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string[] memory _productGallery,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) external {
    Product memory product = Product(
      _productId,
      _productName,
      _productDescription,
      _productGallery,
      _productPriceInr,
      _productPriceEth,
      payable(msg.sender)
    );
    allProducts.push(product);
    sellerProducts[msg.sender].push(_productId);
  }

  function deleteProduct(string memory _productId) external {
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
  ) external {
    uint256 productIndex = getProductIndex(_productId);
    allProducts[productIndex].productName = _productName;
    allProducts[productIndex].productDescription = _productDescription;
    allProducts[productIndex].productPriceInr = _productPriceInr;
    allProducts[productIndex].productPriceEth = _productPriceEth;
  }

  function buyProduct(string memory _productId) external payable {
    uint256 productIndex = getProductIndex(_productId);
    require(msg.value == allProducts[productIndex].productPriceEth);
    allProducts[productIndex].seller.transfer(msg.value);
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

  function getUserInfo() external view returns (User memory) {
    return users[msg.sender];
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
    users[msg.sender].imgURL = _imgURL;
    users[msg.sender].name = _name;
    users[msg.sender].email = _email;
    users[msg.sender].phone = _phone;
    users[msg.sender].dob = _dob;
    users[msg.sender].gender = _gender;
    users[msg.sender].addr = _addr;
    users[msg.sender].city = _city;
    users[msg.sender].pinCode = _pinCode;
  }

  function getAllProducts() external view returns (Product[] memory) {
    return allProducts;
  }

  function getProduct(string memory _id) public view returns (Product memory) {
    return allProducts[getProductIndex(_id)];
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

  function getCart(string[] memory _productId)
    external
    view
    returns (Product[] memory)
  {
    Product[] memory products = new Product[](_productId.length);
    for (uint256 i = 0; i < _productId.length; i++) {
      uint256 productIndex = getProductIndex(_productId[i]);
      products[i] = allProducts[productIndex];
    }
    return products;
  }
}
