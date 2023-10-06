import React, { useState, useEffect } from "react";
import Layout from "../components/main/layout/Layout";
import Navbar from "../components/main/navbar/Navbar";
import Button from "../components/basic/button/Button";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import { heading, panel, text } from "@metamask/snaps-ui";

export default function Home() {
  const [account, setAccount] = useState(""); // State to store Ethereum account
  const [balance, setBalance] = useState(""); // State to store account balance
  // Function to handle Ethereum button click
  const handleEthereumButtonClick = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const resolvedAddress = await provider.resolveName("drillchain.eth");
        const resolvedENSName = await provider.resolveName(
          "0x81D9069957Bfbd6fb29C3b0686Ce78397FF3E009"
        );

        // Fetch Ethereum account
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }

        // Fetch Ethereum balance
        const ethBalance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(ethBalance));
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // Fetch Ethereum data on component mount
    handleEthereumButtonClick();
  }, []);

  const getAccount = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAccount(account);
      } catch (error) {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <Layout>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Swap</h1>
          <Button type="secondary" iconOpacity={1} iconClass="icon-gear" />
        </div>
        <div className={`common-card ${styles.card}`}>
          <div className={styles.series}>
            <img src="../images/eth.png" alt="" width="48px" height="48px" />
            <div style={{ fontWeight: 600, marginLeft: "16px" }}>
              <span className="color-primary">ZETA</span>
              <div style={{ fontSize: "13px" }}>
                <span className="color-primary">Balance:</span>
                <span
                  className="color-primary"
                  style={{ fontFamily: "Gilroy", paddingTop: "2px" }}
                >
                  &nbsp;31.60 SKL
                </span>
                <span className="color-alternate">&nbsp;(Max)</span>
              </div>
            </div>
          </div>
          <div>
            <span className={styles.smallNum}>~$46,570.1</span>
            <div style={{ marginBottom: "4px" }}></div>
            <span className={styles.bigNumber}>31.20349902</span>
          </div>
        </div>
        <div style={{ marginBottom: "4px" }}>
          {/* <div>
                  <Button type='secondary' iconOpacity={1} iconClass='icon-arrow-down'/>
                </div> */}
        </div>
        <div className={`common-card ${styles.card}`}>
          <div className={styles.series}>
            <img src="../images/tether.png" alt="" width="48px" />
            <div style={{ fontWeight: 600, marginLeft: "16px" }}>
              <span className="color-primary">TRAP</span>
              <div style={{ fontSize: "13px" }}>
                <span className="color-primary">Balance:</span>
                <span
                  className="color-primary"
                  style={{ fontFamily: "Gilroy", paddingTop: "2px" }}
                >
                  &nbsp;150,000 TRAP
                </span>
                <span className="color-alternate">&nbsp;(Max)</span>
              </div>
            </div>
          </div>
          <div>
            <span className={styles.smallNum}>(-0.0856%)</span>
            <span className={styles.smallNum}>~$46,711.1</span>
            <div style={{ marginBottom: "4px" }}></div>
            <span className={styles.bigNumber}>150,000</span>
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}></div>
        <div className={`common-card ${styles.cardResult}`}>
          <span className="color-alternate">1 TRAP</span>
          <span className="color-primary">=</span>
          <div className={styles.series}>
            <span className="color-primary">0.0004551 ZETA</span>
            <div style={{ marginRight: "12px" }} />
            <Button type="secondary" iconOpacity={1} iconClass="icon-help" />
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}></div>
        <div style={{ margin: "0 16px" }}>
          <Button type="main">Swap</Button>
        </div>
        <div style={{ marginBottom: "16px" }}></div>
      </div>
    </Layout>
  );
}
