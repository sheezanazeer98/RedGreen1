# RedGreenOne Token

Repository for the **RedGreenOne (RG1)** ERC20 token. This repository contains the Solidity smart contract code for the RedGreenOne token, which is built on the EVM blockchain.

## Overview

The RedGreenOne token is an ERC20-compliant token with the following features:

- **Name**: RedGreenOne
- **Symbol**: RG1
- **Decimals**: 18
- **Total Supply**: 10 million RG1 tokens

Upon deployment, the total supply of tokens is minted to the specified owner address. The contract is also payable, allowing it to receive Ether during deployment.

## Features

- **ERC20 Standard**: Fully compliant with the ERC20 token standard, ensuring compatibility with wallets and exchanges.
- **Ownable**: Inherits from OpenZeppelin's `Ownable` contract, providing administrative control to the owner.
- **Minting**: Initial minting of 10 million RG1 tokens to the owner's address.

## Installation

To interact with the RedGreenOne contract, you will need to have a development environment set up for Ethereum smart contracts. We recommend using  [Hardhat](https://hardhat.org/).

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/redgreenone-token.git
   cd redgreenone-token
   ```
2. Install dependencies:
   ```bash
     npm install
   ```  
3. Install dependencies:
   ```bash
    npx hardhat compile
   ```  
4. Deployment
    ```bash
    npx hardhat run scripts/deploy.js --network yourNetwork
   ```   