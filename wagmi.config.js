const {
  WagmiConfig,
  createConfig,
  createConfig,
  configureChains,
  mainnet,
} = require("wagmi");
const { createPublicClient, http } = require("viem");
const { publicProvider } = require("wagmi/providers/public");

const { publicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  );
}
