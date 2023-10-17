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
import { ComethWallet } from "@cometh/connect-sdk";
import styles from "../components/main/login/Login.module.css";
import detectEthereumProvider from "@metamask/detect-provider";
import { infuraProvider } from "wagmi/providers/infura";
const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const Login = () => {
  const [userAccount, setUserAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false); // State to track connection status
  const router = useRouter();

  const handleConnect = async () => {
    try {
      // Replace with the actual web3 method you want to call
      // const result = await web3.eth.someAsyncMethod();
      // console.log(result);

      const { address } = useAccount();
      const { connect } = useConnect({
        connector: new InjectedConnector(),
      });

      // Connect the user
      await connect();

      // Update the connection status
      setIsConnected(true);

      setUserAccount(address);
      // setUserBalance(account); // You can update the user balance here if needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      const { disconnect } = useDisconnect();

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
        <h2>Connect Wallet</h2>
        <form>
          <div>
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
