import React from "react";

function ConnectWallet({
  connectionError,
  isConnecting,
  isConnected,
  connect,
  wallet,
}) {
  const getTextButton = () => {
    if (isConnected && wallet) {
      return (
        <a
          href={`https://mumbai.polygonscan.com/address/0xd4f4Ce86A95cC0B5B5eCfE72BB3ceA32BDa15318${wallet.getAddress()}`}
          target="_blank"
        >
          Wallet connected
        </a>
      );
    } else if (isConnecting) {
      return <span>Getting wallet...</span>;
    } else {
      return (
        <button
          disabled={!!connectionError}
          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover-bg-gray-100 disabled-bg-white"
          onClick={connect}
        >
          Get your Wallet
        </button>
      );
    }
  };

  return (
    <>
      {!connectionError ? (
        <div>{getTextButton()}</div>
      ) : (
        <p className="flex items-center justify-center text-gray-900 bg-red-50">
          Connection denied
        </p>
      )}
    </>
  );
}

export default ConnectWallet;
