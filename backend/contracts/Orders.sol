// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {SharedStructs} from './SharedStructs.sol';
import {Data} from './Data.sol';

contract Orders {
  function placeOrder(
    string memory _id,
    string memory _date,
    SharedStructs.User memory _buyer,
    SharedStructs.Product memory _product,
    int _qty,
    uint256 _shippingPriceInr
  ) public {
    Data.placeOrder(
      _id,
      _date,
      _buyer,
      _product,
      _qty,
      _shippingPriceInr,
      'pending'
    );
  }

  function getOrder(
    string memory _id
  ) public view returns (SharedStructs.Order memory) {
    return Data.getOrder(_id);
  }

  function getOrders() public view returns (SharedStructs.Order[] memory) {
    return Data.allOrders();
  }

  function getSellerOrders()
    external
    view
    returns (SharedStructs.Order[] memory)
  {
    return Data.getSellerOrders();
  }
}
