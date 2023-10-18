// // Import necessary modules and components
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/main/layout/Layout";
import Navbar from "../components/main/navbar/Navbar";
// import StripePack from "@safe-global/onramp-kit";
const Onramp = () => {
  const userAccount = "ExampleUserAccount";
  const userBalance = 1000; // Some initial balance value

  const initializeStripe = async () => {
    const standaloneOnramp = window.StripeOnramp.Standalone();

    const stripePack = new StripePack({
      // Get public key from Stripe: https://dashboard.stripe.com/register
      stripePublicKey:
        "pk_test_51MZbmZKSn9ArdBimSyl5i8DqfcnlhyhJHD8bF2wKrGkpvNWyPvBAYtE211oHda0X3Ea1n4e9J9nh2JkpC7Sxm5a200Ug9ijfoO",
      // Deploy your own server: https://github.com/5afe/aa-stripe-service
      onRampBackendUrl: "https://aa-stripe.safe.global",
    });
    // Assign a value to redirectUrl
    redirectUrl = standaloneOnramp.getUrl();
    await stripePack.init();

    const redirectUrl = standaloneOnramp.getUrl();
    const sessionData = await stripePack.open({
      element: "#stripe-root", // Can be any CSS selector
      theme: "light", // light | dark
      // Optional, if you want to use a specific created session
      // sessionId: 'cos_1Mei3cKSn9ArdBimJhkCt1XC',
      // Optional, if you want to specify default options
      // defaultOptions: {
      //   transaction_details: {
      //     wallet_address: walletAddress,
      //     lock_wallet_address: true,
      //     supported_destination_networks: ['ethereum', 'polygon'],
      //     supported_destination_currencies: ['usdc'],
      //   },
      //   customer_information: {
      //     email: 'john@doe.com',
      //   },
    });

    const uiLoadedHandler = () => {
      console.log("UI loaded");
    };

    const sessionUpdatedHandler = (e) => {
      console.log("Session Updated", e.payload);
    };

    stripePack.subscribe("onramp_ui_loaded", uiLoadedHandler);
    stripePack.subscribe("onramp_session_updated", sessionUpdatedHandler);

    stripePack.unsubscribe("onramp_ui_loaded", uiLoadedHandler);
    stripePack.unsubscribe("onramp_session_updated", sessionUpdatedHandler);
  };

  // Call the async initialization function
  initializeStripe();

  return (
    <Layout>
      <Navbar signer={userAccount} account={userBalance} />
      
      <div id="stripe-root">{/* <a href={redirectUrl}>Buy Crypto</a> */}</div>
    </Layout>
  );
};

export default Onramp;
