// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { SharedStructs } from './SharedStructs.sol';
import { Data } from './Data.sol';

contract Products {
  function addProduct(
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string[] memory _productGallery,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) external {
    Data.addProduct(SharedStructs.Product(
      _productId,
      _productName,
      _productDescription,
      _productGallery,
      _productPriceInr,
      _productPriceEth,
      payable(msg.sender)
    ));
  }
    
  function deleteProduct(string memory _productId) external {
    Data.deleteProduct(_productId);
  }

  function updateProduct(
    string memory _productId,
    string memory _productName,
    string memory _productDescription,
    string memory _productPriceInr,
    uint256 _productPriceEth
  ) external {
    Data.updateProduct(_productId, _productName, _productDescription, _productPriceInr, _productPriceEth);
  }

  function buyProduct(string memory _productId) external payable {
    uint256 productIndex = Data.getProductIndex(_productId);
    require(msg.value == Data.allProducts()[productIndex].productPriceEth);
    Data.allProducts()[productIndex].seller.transfer(msg.value);
  }

  function getAllProducts() external view returns (SharedStructs.Product[] memory) {
    return Data.allProducts();
  }

  function getProduct(string memory _id) public view returns (SharedStructs.Product memory) {
    return Data.getProduct(_id);
  }

  function getSellerProducts() external view returns (SharedStructs.Product[] memory) {
    return Data.getSellerProducts();
  }

  function getCart(string[] memory _productId) external view returns (SharedStructs.Product[] memory) {
    return Data.getCart(_productId);
  }
}