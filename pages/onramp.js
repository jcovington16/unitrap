// // Import necessary modules and components
// import Layout from "../components/main/layout/Layout";
// import Navbar from "../components/main/navbar/Navbar";
// import StripePack from "@safe-global/onramp-kit";
// const standaloneOnramp = window.StripeOnramp.Standalone();
// const redirectUrl = standaloneOnramp.getUrl();

// const stripePack = new StripePack({
//   stripePublicKey:
//     "",
//   onRampBackendUrl: "https://aa-stripe.safe.global",
// });

// async function initStripe() {
//   await stripePack.init();

//   const sessionData = await stripePack.open({
//     element: "#stripe-root",
//     theme: "light",
//   });

//   const uiLoadedHandler = () => {
//     console.log("UI loaded");
//   };

//   const sessionUpdatedHandler = (e) => {
//     console.log("Session Updated", e.payload);
//   };

//   stripePack.subscribe("onramp_ui_loaded", uiLoadedHandler);
//   stripePack.subscribe("onramp_session_updated", sessionUpdatedHandler);

//   stripePack.unsubscribe("onramp_ui_loaded", uiLoadedHandler);
//   stripePack.unsubscribe("onramp_session_updated", sessionUpdatedHandler);
// }

// initStripe();

// function Onramp() {
//   return (
//     <Layout>
//       <Navbar signer={userAccount} account={userBalance} />
//       <div id="stripe-root">
//         <a href={redirectUrl}>Buy Crypto</a>
//       </div>
//     </Layout>
//   );
// }

// export default Onramp;
