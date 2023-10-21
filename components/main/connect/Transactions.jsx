import { ComethProvider } from "@cometh/connect-sdk";
import { useWalletAuth } from "../modules/wallet/hooks/useWalletAuth";
import { TransactionReceipt } from "@ethersproject/providers";
import React, { useEffect, useState } from "react";
import { RelayTransactionResponse } from "@cometh/connect-sdk";
import Confetti from "react-confetti";

const instanceProvider = new ComethProvider(instance);

const contract = new ethers.Contract(
  COUNTER_CONTRACT_ADDRESS,
  countContractAbi,
  instanceProvider.getSigner()
);
