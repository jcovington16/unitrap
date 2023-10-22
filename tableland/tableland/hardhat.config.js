/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    "arbitrum-goerli": {
      url: `https://arb-goerli.g.alchemy.com/v2/${
        process.env.ARBITRUM_GOERLI_API_KEY ?? ""
      }`,
      accounts:
        process.env.ARBITRUM_GOERLI_PRIVATE_KEY !== undefined
          ? [process.env.ARBITRUM_GOERLI_PRIVATE_KEY]
          : [],
    },
  },
  config: {
    args: {
      contractAddress: "0x383f1BAA132Cea7CFfb2780f2935deD0f8e7E654#code", // IMPORTANT: Update with deployed contract
      linkTokenAddress: "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28", // Arbitrum Goerli LINK token
      oracleAddress: "0x2362A262148518Ce69600Cc5a6032aC8391233f5", // Translucent (node operator) address
      jobId: "7599d3c8f31e4ce78ad2b790cbcfc673" // Translucent job ID for single word uint256 request
    }
  }
};
