// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {SharedStructs} from './SharedStructs.sol';
import { Users } from './Users.sol';
import { Products } from './Products.sol';
import { Orders } from './Orders.sol';
import { Data } from './Data.sol';

// This contract uses the library to set and retrieve state variables
contract Shoppingverse is Users, Products, Orders {
  constructor() {
      Data.setStateVariables(
        address(this),
        msg.sender
    );
  }
}
