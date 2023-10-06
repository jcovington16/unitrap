const tokenAddress = "0xd00981105e61274c8a5cd5a88fe7e037d935b513";
const tokenSymbol = "TRAP";
const tokenDecimals = 18;
const tokenImage = "https://unitrap.io/images/trap.png";
try {
  const wasAdded = await window.ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  if (wasAdded) {
    console.log("Thanks for your interest!");
  } else {
    console.log("Your loss!");
  }
} catch (error) {
  console.log(error);
}
try {
  const wasAdded = await ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC721", // or 'ERC1155'
      options: {
        address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", // The address of the token.
        tokenId: "1", // ERC-721 or ERC-1155 token ID.
      },
    },
  });

  if (wasAdded) {
    console.log("User successfully added the token!");
  } else {
    console.log("User did not add the token.");
  }
} catch (error) {
  console.log(error);
}
