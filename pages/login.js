import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/main/layout/Layout";
import Navbar from "../components/main/navbar/Navbar";
import {
  configureChains,
  useAccount,
  useConnect,
  useDisconnect,
  mainnet,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import {
  ComethWallet,
  ConnectAdaptor,
  SupportedNetworks,
  ComethProvider,
} from "@cometh/connect-sdk";
import styles from "../components/main/login/Login.module.css";
// import { infuraProvider } from "wagmi/providers/infura";
import ConnectWallet from "../components/main/connect/ConnectWallet.jsx";
import { useWalletAuth } from "./modules/wallet/hooks/useWalletAuth";
import { WalletProvider } from "./modules/wallet/services/context";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const Login = () => {
  const [userAccount, setUserAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false); // State to track connection status
  const router = useRouter();
  console.log("Login page");

  // const API_KEY = apiKey;

  const handleConnect = async () => {
    try {
      // Replace with the actual web3 method you want to call
      // const result = await web3.eth.someAsyncMethod();
      console.log(result);
      const walletAdaptor = new ConnectAdaptor({
        chainId: SupportedNetworks.MUMBAI,
        apiKey: API_KEY,
      });

      const provider = new ComethProvider(wallet);
      console.log("Provider-Cometh");

      const instanceProvider = new ComethProvider(instance);
      console.log("instanceProvider");

      const instance = new ComethWallet({
        authAdapter: walletAdaptor,
        apiKey: API_KEY,
      });

      const nftContract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        nftContractAbi,
        provider.getSigner()
      );
      const tx = await nftContract.count();
      const txResponse = await tx.wait();

      const contract = new ethers.Contract(
        COUNTER_CONTRACT_ADDRESS,
        countContractAbi,
        instanceProvider.getSigner()
      );

      const { address } = useAccount();
      const { connect } = useConnect({
        connector: new InjectedConnector(),
      });

      // Connect the user
      try {
        await wallet.connect(WALLET_ADDRESS);
        console.log("User connected successfully");
        console.log(wallet);
      } catch (error) {
        console.error("Error connecting the user:", error);
      }

      // Update the connection status
      setIsConnected(true);
      console.log("isConnected");

      setUserAccount(address);
      // setUserBalance(account); // You can update the user balance here if needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      const { disconnect } = useDisconnect();
      console.log("disconnect");
      // Disconnect the user
      await disconnect();

      // Update the connection status
      setIsConnected(false);

      setUserAccount("");
      // setUserBalance(""); // Reset user balance when disconnected
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userAccount) {
      router.push("/");
    }
  }, [userAccount, router]);
  return (
    <Layout>
      <Navbar signer={userAccount} account={userBalance} />
      <div className={styles.container}>
        <h2>Cometh Wallet</h2>
        <form>
          <div>
            <ConnectWallet
              isConnected={handleConnect}
              // isConnecting={isConnecting}
              // connect={connect}
              // connectionError={connectionError}
              // wallet={wallet}
            />
            {/* {transactionSuccess && (
              <Confetti width={windowWidth} height={windowHeight} />
            )} */}

            {isConnected && (
              <Transaction
                transactionSuccess={transactionSuccess}
                setTransactionSuccess={setTransactionSuccess}
              />
            )}

            {isConnected ? (
              <button onClick={handleDisconnect}>Disconnect</button>
            ) : (
              <button onClick={handleConnect}>Connect Wallet</button>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
