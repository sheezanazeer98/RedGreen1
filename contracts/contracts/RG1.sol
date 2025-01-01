    // SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import {ERC20} from "contracts/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "contracts/@openzeppelin/contracts/access/Ownable.sol";

contract RedGreenOne is ERC20,Ownable {
    constructor(address _owner) payable ERC20("RedGreenOne", "RG1") Ownable(_owner) {
        _mint(_owner, 10000000000000000000000000);
    }
}