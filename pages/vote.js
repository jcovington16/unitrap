import Layout from "../components/main/layout/Layout";
import Navbar from "../components/main/navbar/Navbar";
import WormholeBridge from "@wormhole-foundation/wormhole-connect";

// const config: WormholeConnectConfig = {
//   env: "mainnet",
//   networks: ["ethereum", "polygon", "solana"],
//   tokens: ["ETH", "WETH", "MATIC", "WMATIC"],
//   rpc: {
//     ethereum: "https://rpc.ankr.com/eth",
//     solana: "https://rpc.ankr.com/solana",
//   },
// };

const vote = () => {
  return (
    <Layout>
      <Navbar />
      <WormholeBridge />
    </Layout>
  );
};
export default vote;
