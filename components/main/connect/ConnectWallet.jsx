import { ComethWallet } from "@cometh/connect-sdk";
import { ComethProvider } from "@cometh/connect-sdk";
import { ethers } from "ethers";
// JavaScript does not have type annotations, so we only have the property names and their expected types.
const ConnectWalletProps = {
  connectionError: null, // string or null
  isConnecting: false, // boolean
  isConnected: false, // boolean
  connect: () => Promise.resolve(), // a function that returns a Promise
  wallet: null,
  ComethWallet, // ComethWallet or null
};

// Initialize or create the 'instance' object here
const instance = {};
instance.propertyName = "propertyValue";
const instanceProvider = new ComethProvider(instance);

// const contract = new ethers.Contract(
//   COUNTER_CONTRACT_ADDRESS,
//   countContractAbi,
//   instanceProvider.getSigner()
// );

function ConnectWallet({
  connectionError,
  isConnecting,
  isConnected,
  connect,
  wallet,
}) {
  const getTextButton = () => {
    if (isConnected) {
      return (
        <>
          <a
            href={`https://mumbai.polygonscan.com/address/${wallet.getAddress()}`}
            target="_blank"
          >
            {"Wallet connected"}
          </a>
        </>
      );
    } else if (isConnecting) {
      return <>{"Getting wallet..."}</>;
    } else {
      return "Get your Wallet";
    }
  };

  return (
    <>
      {!connectionError ? (
        <button
          disabled={isConnecting || isConnected || !!connectionError}
          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 disabled:bg-white"
          onClick={connect}
        >
          {getTextButton()}
        </button>
      ) : (
        <p className="flex items-center justify-center text-gray-900 bg-red-50">
          Connection denied
        </p>
      )}
    </>
  );
}
export default ConnectWallet;
