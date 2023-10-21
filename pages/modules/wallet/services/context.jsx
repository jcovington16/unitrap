import React, { createContext, useState } from "react";
import { ComethProvider, ComethWallet } from "@cometh/connect-sdk";
import { ethers } from "ethers";

export const WalletContext = createContext({
  wallet: null,
  setWallet: () => {},
  provider: null,
  setProvider: () => {},
  counterContract: null,
  setCounterContract: () => {},
});

export function WalletProvider({ children }) {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [counterContract, setCounterContract] = useState(null);

  return (
    <WalletContext.Provider
      value={{
        wallet,
        setWallet,
        provider,
        setProvider,
        counterContract,
        setCounterContract,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
