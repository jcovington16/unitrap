import { ComethProvider } from "@cometh/connect-sdk";

const instanceProvider = new ComethProvider(instance);

const contract = new ethers.Contract(
  COUNTER_CONTRACT_ADDRESS,
  countContractAbi,
  instanceProvider.getSigner()
);
