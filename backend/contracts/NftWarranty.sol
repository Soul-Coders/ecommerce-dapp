// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract NftWarranty is ERC721, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  mapping(uint256 => string) private _tokenURIs;
  mapping(address => uint256[]) public userNfts;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

  function mint(string memory _tokenURI) external {
    uint256 tokenId = _tokenIds.current();
    _tokenIds.increment();
    _safeMint(msg.sender, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    userNfts[msg.sender].push(tokenId);
  }

  function _setTokenURI(uint256 _tokenId, string memory _tokenURI)
    internal
    virtual
  {
    require(_exists(_tokenId), 'ERC721Metadata: URI set of nonexistent token'); // Checks if the tokenId exists
    _tokenURIs[_tokenId] = _tokenURI;
  }

  function tokenURI(uint256 _tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(_tokenId), 'ERC721Metadata: URI set of nonexistent token');
    return _tokenURIs[_tokenId];
  }

  function getUserNfts() external view returns (uint256[] memory) {
    return userNfts[msg.sender];
  }
}
